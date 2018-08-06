const potionList = require("./data/potions.json");

const retrieve = () => {
    return potionList.map(potion => [
        {
            name: "POTION",
            skipSimple: true,
            meta: {
                potion
            }
        },
        {
            name: "SPLASH_POTION",
            skipSimple: true,
            meta: {
                potion
            }
        },
        {
            name: "LINGERING_POTION",
            skipSimple: true,
            meta: {
                potion
            }
        },
        {
            name: "TIPPED_ARROW",
            skipSimple: true,
            meta: {
                potion
            }
        },
    ]);
}

module.exports = { retrieve }
