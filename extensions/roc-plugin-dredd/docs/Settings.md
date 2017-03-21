# Settings for `roc-plugin-dredd`

## Test


### Dredd

✓ ― Supports __raw

| Name     | Description                                           | Path                | CLI option            | Default      | Type            | Required | Can be empty | Extensions       |
| -------- | ----------------------------------------------------- | ------------------- | --------------------- | ------------ | --------------- | -------- | ------------ | ---------------- |
| output   | Filepaths and file name for the output file           | test.dredd.output   | --test-dredd-output   | `[]`         | `Array(String)` | Yes      | Yes          | roc-plugin-dredd |
| path     | Filepaths to API descriptions, can use glob wildcards | test.dredd.path     | --test-dredd-path     | `["api.md"]` | `Array(String)` | Yes      | Yes          | roc-plugin-dredd |
| reporter | Report format for the report file                     | test.dredd.reporter | --test-dredd-reporter | `[]`         | `Array(String)` | Yes      | Yes          | roc-plugin-dredd |
