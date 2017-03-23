import { initLog } from 'roc';
import { registerAction } from 'roc/lib/hooks/manageActions';

import Dredd from '../dredd';

const { name, version } = require('../../package.json');

const log = initLog(name, version);

export default ({ context }, watch) => (port, path) => () => {
    const { verbose, config: { settings } } = context;

    // Make it possible to override reporter using _raw
    const options = {
        ...settings.test.dredd,
        silent: true, // We need to set this to silent to disable the default CLI reporter
        verbose, // We introduce this option to enable verbosity
    };

    const dredd = new Dredd({
        server: `http://localhost:${port}${path}`,
        options,
    }, log);

    dredd.run(watch);
};
