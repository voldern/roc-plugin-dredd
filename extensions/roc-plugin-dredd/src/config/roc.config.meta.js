import { required, isArray, isString } from 'roc/validators';

export default {
    settings: {
        test: {
            dredd: {
                path: {
                    description: 'Filepaths to API descriptions, can use glob wildcards',
                    validator: required(isArray(isString)),
                },
            },
        },
    },
};
