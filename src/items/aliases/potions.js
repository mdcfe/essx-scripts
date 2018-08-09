const _ = require("lodash");

const { modifiers, potions, materials } = require("./data/potion");

const test = ({ material, potionNbt, potionModifier }) => !!potionNbt
    && Object.keys(potions).includes(potionNbt)
    && Object.keys(materials).includes(material);

const get = ({ material, potionNbt, potionModifier }) => {
    const potionObj = potions[potionNbt];

    let potNames;
    let modifier = potionModifier;

    if (potionObj.ref) {
        potNames = potions[potionObj.ref];
    } else {
        potNames = potionObj;
    }

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
