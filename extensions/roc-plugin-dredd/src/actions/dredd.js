import { initLog } from 'roc';
import Dredd from 'dredd';

const { name, version } = require('../../package.json');

const log = initLog(name, version);

let runningTest = false;
let queuedTest = false;

function runTest(dredd, watch = false) {
    log.small.info('Running dredd.\n');

    queuedTest = false;
    runningTest = true;

    dredd.run((err, stats) => {
        if (err) {
            throw err;
        }

        if (stats.errors) {
            log.large.error(`${stats.errors} errors occured`);
        }

        if (stats.failures) {
            log.large.warn(`${stats.failures} tests failed`);

            if (!watch) {
                process.exit(1);
            }
        }

        if (stats.skipped) {
            log.large.warn(`Skipped ${stats.skipped} tests`);
        }

        log.small.success(`Tests passed in ${stats.duration}ms`);

        if (!watch) {
            process.exit(0);
        }

        if (queuedTest) {
            runTest(dredd, true);
        } else {
            runningTest = false;
        }
    });
}

function watchTest(dredd) {
    if (runningTest) {
        queuedTest = true;
    } else {
        runTest(dredd, true);
    }
}

export default ({ context }, watch) => (port, path) => () => {
    const { verbose, config: { settings } } = context;

    // Make it possible to override reporter using _raw
    const options = {
        ...settings.test.dredd,
        reporter: settings.test.dredd.reporter || ['dot'],
        level: verbose ? 'debug' : settings.test.dredd.level,
    };

    const dredd = new Dredd({
        server: `http://localhost:${port}${path}`,
        options,
    });

    if (watch) {
        watchTest(dredd);
    } else {
        runTest(dredd);
    }
};
