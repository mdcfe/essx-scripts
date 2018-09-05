const exclusions = [
    ...require("./exclusions/potions"),
    ...require("./exclusions/dslabs"),
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
