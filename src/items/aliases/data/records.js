const prefixes = {
    // There's only one prefix for music records in Materials
    MUSIC_DISC: ["musicrecord", "musicdisk", "musicdisc", "musiccd", "mrecord", "mdisk", "mdisc", "mcd", "record", "disk", "disc", "cd"]
};

const suffixes = {
    "13": ["!13", "!gold", "!go", "1", "!1"],
    CAT: ["!cat", "!green", "!gr", "2", "!2"],
    BLOCKS: ["!blocks", "!orange", "!or", "3", "!3"],
    CHIRP: ["!chirp", "!red", "!re", "4", "!4"],
    FAR: ["!far", "!lightgreen", "!lgreen", "!lightgr", "!lgr", "5", "!5"],
    MALL: ["!mall", "!purple", "!pu", "6", "!6"],
    MELLOHI: ["!mellohi", "!pink", "!pi", "7", "!7"],
    STAL: ["!stal", "!black", "!bl", "8", "!8"],
    STRAD: ["!strad", "!white", "!wh", "9", "!9"],
    WARD: ["!ward", "!darkgreen", "!dgreen", "!darkgr", "!dgr", "10", "!10"],
    "11": ["!11", "!cracked", "!crack", "!c", "11"],
    WAIT: ["!wait", "!blue", "!cyan", "!bl", "!cy", "12", "!12"],
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = [];

module.exports = { prefixes, suffixes, protected };
