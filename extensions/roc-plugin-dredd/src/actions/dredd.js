import { registerAction } from 'roc/lib/hooks/manageActions';

import { invokeHook, name } from '../roc/util';

import serverStartedAction from './server-started';

export default () => (watch) => {
    registerAction((action) => {
        if (action.hook !== 'server-started') {
            return null;
        }

        return serverStartedAction(action, watch);
    }, name);

    invokeHook('run-dev-command', ['node']);
};
