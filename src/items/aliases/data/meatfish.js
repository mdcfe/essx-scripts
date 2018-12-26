// Meat modifier
const prefixes = {
    COOKED: ["cooked", "cook", "c", "grilled", "grill", "g", "roasted", "roast", "ro", "bbq", "toasted"],
    // default - uncooked
    "": ["raw", "ra", "uncooked", "plain", ""]
};

// Types of meat/fish
const suffixes = {
    BEEF: ["beef", "steak", "cowmeat"],
    CHICKEN: ["chicken", "!chicken"],
    COD: ["fish", "cod"], // What used to be just "fish" is now cod
    MUTTON: ["mutton", "sheepmeat"],
    PORKCHOP: ["pork", "porkchop"],
    PUFFERFISH: ["pufferfish", "pufffish", "fishpuff", "pfish", "fishp"],
    RABBIT: ["rabbit", "hare", "hasenpfeffer"],
    SALMON: ["salmon", "salmonfish", "sfish", "fishs"],
    TROPICAL_FISH: ["clownfish", "nemo", "clfish", "fishcl", "nfish", "fishn"],
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
// eg. prevents WHITE_STAINED_GLASS overriding "glass"
const protected = [];

module.exports = {
    prefixes,
    suffixes,
    protected
};


// ...really though, is fish meat? who knows?
