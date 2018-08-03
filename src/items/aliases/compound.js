const _ = require("lodash");

function test({ name }) {
    return Object.keys(this.prefixes)
        .reduce((acc, prefix) => acc || name.includes(prefix), false)
    && Object.keys(this.suffixes)
        .reduce((acc, suffix) => acc || name.includes(suffix), false);
}

function get({ name }) {
    const prefix = Object.keys(this.prefixes)
        .filter(color => name.includes(color))[0]; // always first match, eg. prefers LIGHT_BLUE over BLUE
    const suffix = Object.keys(this.suffixes)
        .filter(type => name.includes(type))[0];

    return _.flatten(
        this.prefixes[prefix].map(prefix =>
            this.suffixes[suffix].map(suffix =>
                joinAlias(prefix, suffix))))
        .filter(alias => !this.protected.includes(alias));
}

function joinAlias(prefix, suffix) {
    if (suffix[0] === "!") {
        return suffix.slice(1) + prefix;
    } else if (suffix.includes("$")) {
        return suffix.replace("$", prefix);
    } else {
        return prefix + suffix;
    }
}

module.exports = data => ({
    test: test.bind(data),
    get: get.bind(data)
});
