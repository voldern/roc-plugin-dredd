import { required, isArray, isString, isBoolean } from 'roc/validators';

export default {
    settings: {
        test: {
            dredd: {
                path: {
                    description: 'Filepaths to API descriptions, can use glob wildcards',
                    validator: required(isArray(isString)),
                },
                level: {
                    description: 'Log level (info, silly, debug, verbose, ...)',
                    validator: required(isString),
                },
            },
        },
    },
};
