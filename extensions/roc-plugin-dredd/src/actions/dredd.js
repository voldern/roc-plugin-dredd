import { initLog } from 'roc';
import Dredd from 'dredd';

const { name, version } = require('../../package.json');

const log = initLog(name, version);

export default ({ context: { config: { settings } } }) => (port, path) => () => {
    log.small.info('Testing API using dredd.\n');

    // Make it possible to override reporter using _raw
    const options = {
        reporter: settings.test.dredd.reporter || ['dot'],
        ...settings.test.dredd,
    };

    const dredd = new Dredd({
        server: `http://localhost:${port}${path}`,
        options,
    });

    dredd.run((err, stats) => {
        if (err) {
            throw err;
        }

        if (stats.errors) {
            log.large.error('One or more errors occured while running dredd');
        }

        if (stats.failures) {
            log.large.error('One or more dredd tests failed');
        }

        log.small.success('Dredd tests passed');
    });
};
