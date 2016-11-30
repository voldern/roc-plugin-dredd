import { invokeHook } from '../roc/util';

export default function dredd({ options: { managed: managedOptions } }) {
    invokeHook('run-dredd-command', managedOptions.watch || false);
}
