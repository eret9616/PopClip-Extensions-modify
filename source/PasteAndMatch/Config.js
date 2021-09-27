define({
    name: `${Util.localize("Paste")} =`,
    options: [{
        identifier: "showIcon",
        type: "boolean",
        label: Util.localize("Show as Icon")
    }],
    actions: (selection, context, options) => {
        if (context.canPaste && context.hasFormatting) {
            let action = () => popclip.pastePlain();
            action.icon=options.showIcon?undefined:null;        
            return action;            
        }
    }
});