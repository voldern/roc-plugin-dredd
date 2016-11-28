# Settings for `roc-plugin-dredd`

## Test


### Dredd

✓ ― Supports __raw

| Name | Description                                           | Path            | CLI option        | Default      | Type            | Required | Can be empty | Extensions       |
| ---- | ----------------------------------------------------- | --------------- | ----------------- | ------------ | --------------- | -------- | ------------ | ---------------- |
| path | Filepaths to API descriptions, can use glob wildcards | test.dredd.path | --test-dredd-path | `["api.md"]` | `Array(String)` | Yes      | Yes          | roc-plugin-dredd |
