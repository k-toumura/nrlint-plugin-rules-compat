# nrlint-plugin-rules-compat
Flow compatibility check rule plugin for nrlint

__Under development: use for design discussion__

## Usage

### 1. install 
```sh
% gh repo clone k-toumura/nrlint-plugin-rules-compat
% cd nrlint-plugin-rules-compat
% npm install
% npm run build
% cd ~/.node-red
% npm install <path-to-this-plugin>
% npm install -g <path-to-this-plugin>    # need to use from CLI
```

### 2. configure

add following setting to ~/.node-red/.nrlintrc.js
```javascript
module.export = {
    "plugins": [
        "nrlint-plugin-rules-compat"
    ],
    "rules": {
        "compat": {
            "targetVersions": {
                // Extract problems when running flow on Node-RED version specified here
                "node-red": "2.1.3",    
            },
        },
        // ...
    }
}
```

### 3. run

Restart Node-RED, or
```sh
% npx nrlint myFlowFile.json
```
in `~/.node-red`.





