# IDE
## [[VSCode]] is a primary [[IDE/IDE|IDE]]

## project-local configuration

```sh
mkdir .vscode
touch .vscode/extensions.json
touch .vscode/settings.json
touch .vscode/tasks.json
touch .vscode/launch.json
touch .vscode/c_cpp_properties.json
```

## tasks

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "doxy: gen",
            "type": "shell",
            "command": "doxygen",
            "args": [".doxygen"],
            "group": {
                "kind": "build",
                "isDefault": false
            }
        }
    ]
}
```
