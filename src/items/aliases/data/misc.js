// Prefixes
const prefixes = {
    STICKY: ["sticky", "stick", "s"],
    RED: ["red", "r"],
    BROWN: ["brown", "b"],
};

// Types of material
const suffixes = {
    PISTON: ["piston", "!piston", "p", "!p", "piston$base", "pistonbase"],
    MUSHROOM_BLOCK: ["giant$mushroom", "giant$mush", "g$mushroom", "g$mush", "huge$mushroom", "huge$mush", "h$mushroom", "h$mush", "big$mushroom", "big$mush", "b$mushroom", "b$mush"],
    MUSHROOM: ["mushroom", "mush", "shroom"],
}

// Ambiguous aliases that shouldn't get outputted here
const protected = ["ps", "sp"];

module.exports = { prefixes, suffixes, protected };
