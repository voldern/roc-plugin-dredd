import UpstreamDredd from 'dredd';

import Reporter from './reporter';

export default class Dredd extends UpstreamDredd {
    constructor(config, logger) {
        super(config);

        this.canceled = false;

        this.reporter = new Reporter(this.configuration.emitter, this.stats, logger,
            config.options.verbose);
    }

    cancel() {
        this.reporter.cancel();
        this.canceled = true;
    }

    run(watch = false) {
        super.run((err) => {
            // We need to check this before the error, because when roc
            // restarts the application dredd will fail with a network error
            if (err && !this.canceled) {
                throw err;
            } else if (this.canceled) {
                this.canceled = false;
            }

            if (!watch) {
                process.exit(0);
            }
        });
    }
}
