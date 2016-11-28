import chalk from 'chalk';
import prettifyResponse from 'dredd/lib/prettify-response';

const underline = chalk.bold.underline;

function getTestDetails(test) {
    let message = test.message;

    if (test.request) {
        message += `\n${underline('Request')}\n${prettifyResponse(test.request)}\n`;
    }

    if (test.expected) {
        message += `\n${underline('Expected')}\n${prettifyResponse(test.expected)}\n`;
    }

    if (test.actual) {
        message += `\n${underline('Actual')}\n${prettifyResponse(test.actual)}\n`;
    }

    return message;
}

export default class Reporter {
    constructor(emitter, stats, logger, verbose = false) {
        this.stats = stats;
        this.log = logger;
        this.verbose = verbose;
        this.canceled = false;

        this.configureEmitter(emitter);
    }

    cancel() {
        this.canceled = true;
    }

    configureEmitter(emitter) {
        emitter.on('start', (_, callback) => {
            this.log.small.info('Running dredd.\n');
            callback();
        });

        emitter.on('test error', (error) => {
            if (!this.canceled) {
                this.log.small.error(error.stack);
            } else {
                this.canceled = false;
            }
        });

        emitter.on('test fail', (test) => {
            this.log.small.warn(getTestDetails(test));
        });

        emitter.on('test pass', (test) => {
            if (this.verbose) {
                this.log.small.info(`${test.title} passed. Duration: ${test.duration}ms`);
                this.log.small.info(getTestDetails(test));
            }
        });

        emitter.on('end', (callback) => {
            const { passes, tests, failures, errors, skipped } = this.stats;

            let message = `${passes} of ${tests} tests passing.`;

            if (failures) {
                message += ` ${failures} failing,`;
            }

            if (errors) {
                message += ` ${errors} errors,`;
            }

            if (skipped) {
                message += ` ${skipped} skipped,`;
            }

            message = `${message.substr(0, message.length - 1)}.`;

            this.log.large.info(message);

            callback();
        });
    }
}
