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
                prefix + suffix)))
        .filter(alias => !this.protected.includes(alias));
}

module.exports = data => ({
    test: test.bind(data),
    get: get.bind(data)
});
