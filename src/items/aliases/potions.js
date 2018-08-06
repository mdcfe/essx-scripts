const _ = require("lodash");

const { modifiers, potions, materials } = require("./data/potion");

const test = ({ name, meta }) => !!meta
    && !!meta.potion
    && Object.keys(potions).includes(meta.potion)
    && Object.keys(materials).includes(name);

const get = ({ name, meta }) => {
    let potion = potions[meta.potion];
    let modifier = potion.modifier;

    if (potion.ref) {
        potion = potions[potion.ref];
    }

    return joinPotion(name, potion, modifier)
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
