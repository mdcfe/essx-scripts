const _ = require("lodash");

function test({ name }) {
    return (includesKeys(name, this.prefixes) && includesKeys(name, this.suffixes))
        || matchesSurround(name, this);
}

function get({ name }) {
    const prefix = Object.keys(this.prefixes)
        .filter(p => name.includes(p))[0]; // always first match, eg. prefers LIGHT_BLUE over BLUE
    const suffix = Object.keys(this.suffixes)
        .filter(s => name.includes(s))[0];

    return _.flatten(
        this.prefixes[prefix].map(prefix =>
            this.suffixes[suffix].map(suffix =>
                joinAlias(prefix, suffix))))
        .filter(alias => !this.protected.includes(alias));
}

function includesKeys(string, obj) {
    return Object.keys(obj)
        .reduce((acc, key) => acc || string.includes(key), false);
}

function matchesSurround(string, data) {
    if (!data.combined) {
        combineSurround(data);
    }
    
    return Object.keys(data.combined).includes(string);
}

function combineSurround(data) {
    data.combined = {};
    const { prefixes, suffixes } = data;
    Object.keys(suffixes).forEach(suffixKey => {
        if (suffixKey.includes("$")) {
            Object.keys(prefixes).forEach(prefixKey => {
                let key = suffixKey.replace("$", prefixKey);
                let value = _.flatten(
                    suffixes[suffixKey].map(suffix => 
                        prefixes[prefixKey].map(prefix =>
                            joinAlias(prefix, suffix)
                        )
                    )
                )
                data.combined[key] = value;
                console.log(`${key}: ${value}`);
            });
        }
    });
    console.log(data);
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
