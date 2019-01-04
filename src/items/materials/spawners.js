const download = require("../../util/dl");

const srcFile = "https://hub.spigotmc.org/stash/projects/SPIGOT/repos/bukkit/raw/src/main/java/org/bukkit/entity/EntityType.java?at=refs%2Fheads%2Fmaster";
const definitionRegex = /([A-Z_]+)\(.+?, .+?, [-0-9]+(?!, false)\)/gm;

let src;

const prep = async () => {
    src = await download(srcFile);
};

const retrieve = () => {
    let matches;
    const materialsFound = [];

    while ((matches = definitionRegex.exec(src)) !== null) {
        if (matches.index === definitionRegex.lastIndex) {
            definitionRegex.lastIndex++;
        }

        const entity = matches[1];

        materialsFound.push({
            skipSimple: true,
            material: "SPAWNER",
            entity: entity
        });
    }

    return materialsFound;
}

module.exports = { prep, retrieve };
