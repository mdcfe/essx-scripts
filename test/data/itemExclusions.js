const exclusions = [
    "clear+pot",
    "diffuse",
    "artless",
    "thin+pot",
    "bungling",
    "smooth+pot",
    "suave",
    "debonair",
    "charming",
    "refined",
    "cordial",
    "sparkling",
    "potent",
    "rank",
    "acrid",
    "gross",
    "stinky",
    "mundaneex",
]

function matches(input, pattern) {
    const strings = pattern.split("+");
    const output = strings.map(str => input.includes(str));
    return !output.includes(false);
}

module.exports = s => {
    let matched;
    return exclusions.reduce((acc, val) => acc || matches(s, val), false);
}