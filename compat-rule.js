module.export = (RED) => {
    RED.plugins.registerPlugin('nrlint-plugin-rules-compat', {
        settings: {
            "*": { exportable: true }
        }
    });
};