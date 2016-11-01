import { invokeHook } from '../roc/util';

export default function dredd() {
    invokeHook('run-dev-command', ['node']);
}
