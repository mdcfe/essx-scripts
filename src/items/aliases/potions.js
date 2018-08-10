const _ = require("lodash");

const { modifiers, potions, materials } = require("./data/potion");

const test = ({ material, potionData }) => !!potionData
    && Object.keys(potions).includes(potionData.vanillaType)
    && Object.keys(materials).includes(material);

const get = ({ material, potionData }) => {
    const potionObj = potions[potionData.vanillaType];
    let potNames;

    if (potionObj.ref) {
        potNames = potions[potionObj.ref];
    } else {
        potNames = potionObj;
    }

    let modifier = potionData.isLong ? "long" :
        potionData.isStrong ? "strong" :
        null;

    return joinPotion(material, potNames, modifier)
};

function joinPotion(material, potNames, modifier) {
    const matNames = materials[material];
    const modNames = modifiers[modifier] || [""];
    return _.flattenDepth(
        matNames.map(matName =>
            potNames.map(potName =>
                modNames.map(modName =>
                    matName.replace("$", potName).replace("*", modName)
                )
            )
        ), 2
    )
}

module.exports = { test, get }
