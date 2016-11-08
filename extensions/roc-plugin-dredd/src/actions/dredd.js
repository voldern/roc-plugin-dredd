import { initLog } from 'roc';
import Dredd from 'dredd';

const { name, version } = require('../../package.json');

const log = initLog(name, version);

let runningTest = false;
let queuedTest = false;

function runTest(dredd) {
    log.small.info('Running dredd.\n');

    queuedTest = false;
    runningTest = true;

    dredd.run((err, stats) => {
        if (err) {
            throw err;
        }

        if (stats.errors) {
            log.large.error('One or more errors occured while running dredd');
        }

        if (stats.failures) {
            log.large.warn('One or more dredd tests failed');
        }

        log.small.success('Dredd tests passed');

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
        runTest(dredd);
    }
}

export default ({ context: { config: { settings } } }) => (port, path) => () => {
    // Make it possible to override reporter using _raw
    const options = {
        reporter: settings.test.dredd.reporter || ['dot'],
        ...settings.test.dredd,
    };

    const dredd = new Dredd({
        server: `http://localhost:${port}${path}`,
        options,
    });

    watchTest(dredd);
};
