# tasks
## `.vscode/tasks.json`

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
        },
        {
            "label": "make: ai",
            "type": "shell",
            "command": "make",
            "args": ["ai"],
            "group": {
                "kind": "build",
                "isDefault": false
            }
        },
    ]
}
```
