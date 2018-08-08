const download = require("../../util/dl");

const srcFile = "https://hub.spigotmc.org/stash/projects/SPIGOT/repos/bukkit/raw/src/main/java/org/bukkit/Material.java?at=refs%2Fheads%2Fmaster";
const regex = /([A-Z13_]+)\(/gm;

let src;

const prep = async () => {
    src = await download(srcFile);
};

const retrieve = () => {
    let matches;
    const materialsFound = [];
    while ((matches = regex.exec(src)) !== null) {
        if (matches.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        const materialName = matches[1];
        
        // Skip legacy materials
        if (materialName.includes("LEGACY_")) continue;

        materialsFound.push({
            name: materialName
        });
    }
    
    return materialsFound;
}

module.exports = { prep, retrieve };
