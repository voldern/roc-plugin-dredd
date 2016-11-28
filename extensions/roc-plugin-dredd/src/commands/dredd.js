import { setActions, registerActions } from 'roc/lib/hooks/manageActions';

import { invokeHook, name } from '../roc/util';
import dreddAction from '../actions/dredd';

export default function dredd({ options: { managed: managedOptions } }) {
    setActions(registerActions([{
        hook: 'server-started',
        description: 'Run dredd tests',
        action: (context) => dreddAction(context, managedOptions.watch),
    }], name));

    invokeHook('run-dev-command', ['node']);
}
