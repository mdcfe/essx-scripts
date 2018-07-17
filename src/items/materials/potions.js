const download = require("./util/dl");

const srcFile = "https://hub.spigotmc.org/stash/projects/SPIGOT/repos/bukkit/raw/src/main/java/org/bukkit/potion/PotionType.java?at=refs%2Fheads%2Fmaster";
const regex = /([A-Z_]+)\(/gm;

const prep = async materials => {
    await download(srcFile);

    let matches;
    while ((matches = regex.exec(src)) !== null) {
        if (matches.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        const potionName = matches[1];

        console.log(`Adding material: ${materialName}`);
        addMaterial(asMaterial(materialName));
    }

}

module.exports = { prep, get }
