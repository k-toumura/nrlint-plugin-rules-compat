# internal design of the plugin

## Compatibility verification function
Each compatibility verification function is defined as follows:
```javascript
function websocketClientHeartbeatCompat(config) {​
    if (config.hb) {​
        return [{​
            ver: ">=2.0.0",​
            message: "Heartbeat is supported in 2.0.0 or newer."​
        }];​
    }​
    return [];​
}​

```
- config: Configuration object of the node
- returns: results of verification.  If there is no incompatibility issue, returns empty array.
    - `ver`: range of versions for which this configuration is valid.
    - `message`: description of incompatibilities

## Calling verification function in handler
In the Flow Linter plugin, a handler is defined for each type of node,
and the handler function is called when a node of that type appears.
The handler function calls the utility function `checkAndReport()`,
which outputs the results of the compatibility verification. 
Below is an example of the handler for the change node.
```javascript
"type:change": function(node) {​
    checkAndReport(changeDeepcopyCompat, node);​
    checkAndReport(changeJsonataCompat, node);​
},
```

## Currently supported flow verifications

| Node | function | available version |
|:-----|:---------|:------------------|
|change|deep copy | >=2.1.0 |
|change|JSONata | >=0.16.0 |
|debug |JSONata | >=0.20.0 |
|delay |optional second output | >=2.1.0|
|exec | hide the console window | >=2.0.0 |
|file in|  include all properties | >=2.0.0 |
|function| on-start/stop | >=1.1.0 |
|inject | set any properties | >=1.1.0 |
|link call |                 | >=2.1.0 |
|mqtt in | dynamic subscription | >=2.1.0 |
|switch | JSONata | >=0.16.0 |
|tail |           | <2.0.0 |
|tcp request | return Strings | >=2.1.0 |
|tls-config | ALPN protocol | >=2.0.0 |
|websocket-client | heartbeat | >=2.0.0 |