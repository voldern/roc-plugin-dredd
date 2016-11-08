import { lazyFunctionRequire } from 'roc';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

const lazyRequire = lazyFunctionRequire(require);

export default {
    config,
    meta,
    commands: {
        development: {
            dredd: {
                command: lazyRequire('../commands/dredd'),
                description: 'Runs dredd in current project',
            },
        },
    },
    hooks: {
        'run-dev-command': {
            description: 'Used to start dev server used for dredd testing',
        },
    },
};
