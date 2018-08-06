const _ = require("lodash");

const potionList = require("./data/potions.json");

const retrieve = () => _.flatten(
    potionList.map(potion => {
        const base = {
            skipSimple: true,
            meta: {
                potion,
                potionModifier: getModifier(potion)
            }
        };

        return [
            {
                name: "POTION",
                ...base
            },
            {
                name: "SPLASH_POTION",
                ...base
            },
            {
                name: "LINGERING_POTION",
                ...base
            },
            {
                name: "TIPPED_ARROW",
                ...base
            },
        ];
    })
);

function getModifier(potion) {
    return potion.includes("long_") ? "long"
        : potion.includes("strong_") ? "strong"
        : null;
}

module.exports = { retrieve };
