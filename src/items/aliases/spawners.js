const _ = require("lodash");
const { joinAlias } = require("./compound");

const {
    prefixes,
    protected,
} = require("./data/spawnable");

const suffixes = {
    SPAWNER: ["mobspawner", "mobcage", "monsterspawner", "monstercage", "mspawner", "mcage", "spawner", "cage"],
};

const test = ({
        material,
        entity
    }) => !!entity &&
    Object.keys(prefixes).includes(entity) &&
    Object.keys(suffixes).includes(material);

const get = ({
    material,
    entity
}) => {
    let aliases = [];

    const prefix = entity;
    const suffix = material;

    aliases.push(_.flatten(
            prefixes[prefix].map(prefix =>
                suffixes[suffix].map(suffix =>
                    joinAlias(prefix, suffix)
                )
            )
        ).filter(alias => !protected.includes(alias)));

    return _.flatten(aliases);
};

module.exports = {
    test,
    get
}
