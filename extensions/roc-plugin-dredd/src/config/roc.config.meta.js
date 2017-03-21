import { required, isArray, isString } from 'roc/validators';

export default {
    settings: {
        test: {
            dredd: {
                path: {
                    description: 'Filepaths to API descriptions, can use glob wildcards',
                    validator: required(isArray(isString)),
                },
                reporter: {
                    description: 'Report format for the report file',
                    validator: required(isArray(isString)),
                },
                output: {
                    description: 'Filepaths and file name for the output file',
                    validator: required(isArray(isString)),
                },
            },
        },
    },
};
