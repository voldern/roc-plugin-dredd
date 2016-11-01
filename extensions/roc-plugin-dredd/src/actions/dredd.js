import { initLog } from 'roc';
import Dredd from 'dredd';

const log = initLog();

export default ({ context: { config: { settings } } }) => () => {
    const port = process.env.PORT || settings.runtime.port;

    const dredd = new Dredd({
        server: `http://localhost:${port}`,
        options: settings.test.dredd,
    });

    log.small.info('Testing API using dredd.\n');

    return () => dredd.run((err, stats) => {
        if (err) {
            throw err;
        }

        if (stats.errors) {
            log.large.error('One or more errors occured while running dredd');
            return;
        }

        if (stats.failures) {
            log.large.error('One or more dredd tests failed');
            return;
        }

        log.small.success('Dredd tests passed');
    });
};
