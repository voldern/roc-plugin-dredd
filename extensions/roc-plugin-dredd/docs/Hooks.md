# Hooks for `roc-plugin-dredd`

## Hooks
* [roc](#roc)
  * [update-settings](#update-settings)
* [roc-plugin-dredd](#roc-plugin-dredd)
  * [run-dev-command](#run-dev-command)
  * [run-dredd-command](#run-dredd-command)

## roc

### update-settings

Expected to return new settings that should be merged with the existing ones.

Makes it possible to modify the settings object before a command is started and after potential arguments from the command line and configuration file have been parsed. This is a good point to default to some value if no was given or modify something in the settings.

__Initial value:__ _Nothing_  
__Expected return value:__ `Object()`

#### Arguments

| Name        | Description                                                                  | Type       | Required | Can be empty |
| ----------- | ---------------------------------------------------------------------------- | ---------- | -------- | ------------ |
| getSettings | A function that returns the settings after the context has been initialized. | `Function` | No       |              |

## roc-plugin-dredd

### run-dev-command

Used to start dev server used for dredd testing

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

### run-dredd-command

Used to run the dredd command

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

#### Arguments

| Name  | Description             | Type      | Required | Can be empty |
| ----- | ----------------------- | --------- | -------- | ------------ |
| watch | Run dredd in watch mode | `Boolean` | Yes      | No           |
