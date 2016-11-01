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
                silent: {
                    description: 'Silences all logging output',
                    validator: required(isBoolean),
                },
                header: {
                    description: 'Strings added as headers (key:value) to every transaction',
                    validator: required(isArray(isString)),
                },
                user: {
                    description: 'Basic Auth credentials in the form username:password',
                    validator: isString,
                },
                reporter: {
                    description: 'Array of possible reporters',
                    validator: required(isArray(isString)),
                },
                output: {
                    description: 'Filepaths to files used for output of file-based reporters',
                    validator: required(isArray(isString)),
                },
                color: {
                    description: 'Color in output',
                    validator: required(isBoolean),
                },
            },
        },
    },
};
