
// 把类似'DIV'、'ui-router'和'UI-ROUTER'等分别变成'div','uiRouter','uiRouter'等

export function templateToName(tagName) {
    let lowerString = (tagName + "").toLowerCase();
    let upperString = (tagName + "").toUpperCase();

    let newTagName = "", accept_ = false;
    for (let i = 0; i < tagName.length; i++) {
        if (tagName[i] != "-") {
            if (accept_) {
                newTagName += upperString[i];
                accept_ = false;
            } else {
                newTagName += lowerString[i];
            }
        } else {
            accept_ = true;
        }
    };

    return newTagName;
};
