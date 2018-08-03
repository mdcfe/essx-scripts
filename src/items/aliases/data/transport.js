// Rail types
const prefixes = {
    // These should all be preferred over basic rails
    ACTIVATOR: ["activator", "activate", "trigger", "a", "t"],
    DETECTOR: ["detector", "detecting", "detect", "d"],
    POWERED: ["powered", "booster", "power", "boost", "p", "b"],
    // Basic rails don't have a prefix
    RAIL: ["", "minecart", "mcart", "mc"]
};

// There's only one rail type here
const suffixes = {
    RAIL: ["rails", "rail", "track"]
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = [];

module.exports = { prefixes, suffixes, protected };
