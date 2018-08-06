const exclusions = [
    "clear+pot", // Removed from game
    "diffuse", // Removed from game
    "artless", // Removed from game
    "thin+pot", // Removed from game
    "bungling", // Removed from game
    "smooth+pot", // Removed from game
    "suave", // Removed from game
    "debonair", // Removed from game
    "charming", // Removed from game
    "refined", // Removed from game
    "cordial", // Removed from game
    "sparkling", // Removed from game
    "potent", // Removed from game
    "rank", // Removed from game
    "acrid", // Removed from game
    "gross", // Removed from game
    "stinky", // Removed from game
    "mundaneex", // Removed from game
    "dualbit", // Removed from game
    "db+pot",
    "regenextendepotion", // Typo
    "slowextenedpotion", // Typo
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