import { setActions, registerActions } from 'roc/lib/hooks/manageActions';

import { invokeHook, name } from '../roc/util';
import dreddAction from '../actions/dredd';

export default function dredd() {
    setActions(registerActions([{
        hook: 'server-started',
        description: 'Run dredd tests',
        action: dreddAction,
    }], name));

    invokeHook('run-dev-command', ['node']);
}
