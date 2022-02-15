
function jsonataCompat(jsExp) {
    const result = [];
    if (jsExp.includes("%.")) { // parent operator
        result.push({
            ver: ">=1.0.4",
            message:"% operator is supported in 1.0.4 or newer."
        });
    }
    if (jsExp.includes("$type")) {
        result.push({
            ver: ">=1.0.4",
            message: "$type function is supported in 1.0.4 or newer."
        })
    }
    if (jsExp.includes("@")) {
        result.push({
            ver: ">=1.0.3",
            message: "@operator is supported in 1.0.3 or newer.",  
        })
    }
    if (jsExp.includes("#")) {
        result.push({
            ver: ">=1.0.3",
            message: "# operator is supported in 1.0.3 or newer."
        })
    }
    if (jsExp.includes("$error")) {
        result.push({
            ver: ">=1.0.3",
            message: "$error function is supported in 1.0.3 or newer."
        })
    }
    if (jsExp.includes("$assert")) {
        result.push({
            ver: ">=1.0.3",
            message: "$assert function is supported in 1.0.3 or newer."
        })
    }
    if (jsExp.includes("$single")) {
        result.push({
            ver: ">=1.0.3",
            message: "$single function is supported in 1.0.3 or newer."
        })
    }
    if (jsExp.includes("$encodeUrl")) {
        result.push({
            ver: ">=1.0.3",
            message: "$encodeUrl[Component] function is supported in 1.0.3 or newer."
        })
    }
    if (jsExp.includes("$decodeUrl")) {
        result.push({
            ver: ">=1.0.3",
            message: "$decodeUrl[Component] function is supported in 1.0.3 or newer."
        })
    }
    if (jsExp.includes("$distinct")) {
        result.push({
            ver: ">=1.0.3",
            message: "$distinct function is supported in 1.0.3 or newer."
        })
    }
    if (jsExp.includes("$eval")) {
        result.push({
            ver: ">=0.20.0",
            message: "$eval function is supported in 0.20.0 or newer."
        })
    }
    if (jsExp.includes("$formatInteger")) {
        result.push({
            ver: ">=0.20.0",
            message: "$formatInteger function is supported in 0.20.0 or newer."
        })
    }
    if (jsExp.includes("$parseInteger")) {
        result.push({
            ver: ">=0.20.0",
            message: "$parseInteger function is supported in 0.20.0 or newer."
        })
    }
    if (jsExp.includes("$formatNumber")) {
        result.push({
            ver: ">=0.18.0",
            message: "$formatNumber function is supported in 0.18.0 or newer."
        })
    }
    if (jsExp.includes("$formatBase")) {
        result.push({
            ver: ">=0.18.0",
            message: "$formatBase function is supported in 0.18.0 or newer."
        })
    }
    if (jsExp.includes("$pad")) {
        result.push({
            ver: ">=0.18.0",
            message: "$pad function is supported in 0.18.0 or newer."
        })
    }
    if (jsExp.includes("$toMillis")) {
        result.push({
            ver: ">=0.18.0",
            message: "$toMillis function is supported in 0.18.0 or newer."
        })
    }
    if (jsExp.includes("$fromMillis")) {
        result.push({
            ver: ">=0.18.0",
            message: "$fromLillis function is supported in 0.18.0 or newer."
        })
    }
    if (jsExp.includes("$clone")) {
        result.push({
            ver: ">=0.18.0",
            message: "$clone function is supported in 0.18.0 or newer."
        })
    }
    if (jsExp.includes("$merge")) {
        result.push({
            ver: ">=0.18.0",
            message: "$merge function is supported in 0.18.0 or newer."
        })
    }
    if (jsExp.includes("$millis")) {
        result.push({
            ver: ">=0.18.0",
            message: "$millis function is supported in 0.18.0 or newer."
        })
    }
    return result;
}


// -------------------------------------------------------------------------------

function changeDeepcopyCompat(config) {
    if (config.rules.some((e) => e.dc )) {
        return [{
            ver: ">=2.1.0",
            message: "Deep copy is supported in 2.1.0 or newer."
        }];
    }
    return [];
}

function changeJsonataCompat(config) {
    let retval = [];
    config.rules.forEach((e) => {
        if (e.tot == "jsonata") { 
            retval.push({
                ver: ">=0.16.0",
                message: "JSONata is supported in 0.16.0 or newer."
            });
            retval = retval.concat(jsonataCompat(e.to));
        } 
    });
    return Array.from(new Set(retval));
}

function debugJsonataCompat(config) {
    if (config.targetType == "jsonata") {
        return jsonataCompat(config.complete).concat({
            ver: ">=0.20.0",
            message: "JSONata is supported in 0.20.0 or newer."
        });
    }
    return [];
}

function delaySecondOutputCompat(config) {
    if (config.outputs == 2) {
        return [{
            ver: ">=2.1.0",
            message: "Optional second output is supported in 2.1.0 or newer."
        }];
    }
    return [];
}

function execWinhideCompat(config) {
    if (config.winHide) {
        return [{
            ver: ">=2.0.0",
            message: "Hiding the console window is supported in 2.0.0 or newer."
        }];
    }
    return [];
}

function fileAllpropsCompat(config) {
    if (config.allProps) {
        return [{
            ver: ">=2.0.0",
            message: "Including all properties is supported in 2.0.0 or newer."
        }];
    }
    return [];
}

function functionInitCompat(config) {
    if ( (config.initialize && config.initialize !== "") ||
         (config.finalize && config.finalize !== "")) {
        return [{
            ver: ">=1.1.0",
            message: "On-start and on-stop codes are supported in 1.1.0 or newer."
        }];
    }
    return [];
}

function injectPropertyCompat(config) {
    const props = config.props;
    if (props) {
        for (let prop of props) {
            if ((prop.p !== "payload") && (prop.p !== "topic")) {
                return [{
                    ver: ">=1.1.0",
                    message: "Injecting values into arbitrary keys are supported in 1.1.0 or newer."
                }];
            }
        }
    }
    return [];
}

function linkcallCompat(_config) {
    return [{
        ver: ">=2.1.0",
        message: "Link call node is supported in 2.1.0 or newer."
    }];
}

function mqttInDynamicCompat(config) {
    if (config.inputs === 1) {
        return [{
            ver: ">=2.1.0",
            message: "Dynamic subscription is supported in 2.1.0 or newer."
        }];
    }
    return [];
}

function switchJsonataCompat(config) {
    let retval = [];
    if ((config.propertyType == "jsonata") ||
        (config.rules.some((e) => e.vt == "jsonata"))) {
        retval = [{
            ver: ">=0.16.0",
            message: "JSONata is supported in 0.16.0 or newer."
        }];
    }
    if (config.propertyType == "jsonata") {
        retval = retval.concat(jsonataCompat(config.property));
    }
    config.rules.forEach((e) => {
        if (e.vt == "jsonata") {
            retval = retval.concat(jsonataCompat(e.v));
        }
    });

    return Array.from(new Set(retval));
}

function tailDefaultCompat(_config) {
    return [{
        ver: "<2.0.0",
        message: "Tail node has been removed from default dependency since 2.0.0."
    }];
}

function tcpRequestStringCompat(config) {
    if (config.ret == "string") {
        return [{
            ver: ">=2.1.0",
            message: "Returning string is supported in 2.1.0 or newer."
        }];
    }
    return [];
}

function tlsconfigAlpnCompat(config) {
    if (config.alpnprotocol) {
        return [{
            ver: ">=2.0.0",
            message: "ALPN protocol can be used in 2.0.0 or newer"
        }];
    }
    return [];
}

function websocketClientHeartbeatCompat(config) {
    if (config.hb) {
        return [{
            ver: ">=2.0.0",
            message: "Heartbeat is supported in 2.0.0 or newer."
        }];
    }
    return [];
}

// -------------------------------------------------------------------------------

module.exports = {
    "compat": {
        meta: {
            type: "suggestion",
            severity: "warn",
            docs: {
                description: "check compatibility of nodes"
            },
            options: {
                targetVersions: {
                    type: "object",
                    default: { "node-red": "2.2.0" }
                }
            }
        },
        create: function(context, ruleConfig) {
            const semver = require('semver');
            const nrver = ruleConfig.targetVersions?.["node-red"] || "2.2.0";

            function checkAndReport(checkfunc, node) {
                const results = checkfunc(node.config);
                results.forEach(({ver,message})=> {
                    if (!semver.satisfies(nrver, ver)) {
                        context.report({ location: [node.id], message })
                    }
                });
            }

            return {
                "type:change": function(node) {
                    checkAndReport(changeDeepcopyCompat, node);
                    checkAndReport(changeJsonataCompat, node);
                },
                "type:debug": function(node) {
                    checkAndReport(debugJsonataCompat, node);                  
                },
                "type:delay": function(node) {
                    checkAndReport(delaySecondOutputCompat, node);
                },
                "type:exec": function(node) {
                    checkAndReport(execWinhideCompat, node);
                },
                "type:file in": function(node) {
                    checkAndReport(fileAllpropsCompat, node);
                },
                "type:function": function(node) {
                    checkAndReport(functionInitCompat, node);
                },
                "type:inject": function(node) {
                    checkAndReport(injectPropertyCompat, node);
                },
                "type:link call": function(node) {
                    checkAndReport(linkcallCompat, node);
                },
                "type:mqtt in": function(node) {
                    checkAndReport(mqttInDynamicCompat, node);
                },
                "type:switch": function(node) {
                    checkAndReport(switchJsonataCompat, node);
                },
                "type:tail": function(node) {
                    checkAndReport(tailDefaultCompat, node);
                },
                "type:tcp request": function(node) {
                    checkAndReport(tcpRequestStringCompat, node);
                },
                "type:tls-config": function(node) {
                    checkAndReport(tlsconfigAlpnCompat, node);
                },
                "type:websocket-client": function(node) {
                    checkAndReport(websocketClientHeartbeatCompat, node);
                }
            }
        }
    }
};