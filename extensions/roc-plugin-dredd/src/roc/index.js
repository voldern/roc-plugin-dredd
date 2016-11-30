import { lazyFunctionRequire } from 'roc';
import { isBoolean, required, notEmpty } from 'roc/validators';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

const lazyRequire = lazyFunctionRequire(require);

export default {
    config,
    meta,
    actions: [
        {
            hook: 'run-dredd-command',
            description: 'Run dredd command',
            action: lazyRequire('../actions/dredd'),
        },
    ],
    commands: {
        development: {
            dredd: {
                command: lazyRequire('../commands/dredd'),
                description: 'Runs dredd in current project',
                settings: ['test'],
                options: {
                    watch: {
                        alias: 'w',
                        description: 'If the tests should run in watch mode.',
                        default: false,
                        validator: isBoolean,
                    },
                },
            },
        },
    },
    hooks: {
        'run-dredd-command': {
            description: 'Used to run the dredd command',
            arguments: {
                watch: {
                    validator: required(notEmpty(isBoolean)),
                    description: 'Run dredd in watch mode',
                },
            },
        },
        'run-dev-command': {
            description: 'Used to start dev server used for dredd testing',
        },
    },
};
