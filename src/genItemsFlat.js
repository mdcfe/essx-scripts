/**
 * genItemsBase
 * 
 * Pulls Materials from the Material enum class and generates items.json from them.
 */

const fs = require("fs-extra");
const path = require("path");

const download = require("./util/dl");
const processAliases = require("./items/aliases");

const srcFile = "https://hub.spigotmc.org/stash/projects/SPIGOT/repos/bukkit/raw/src/main/java/org/bukkit/Material.java?at=refs%2Fheads%2Fmaster";
const regex = /([A-Z_]+)\(/gm;
const outPath = path.resolve(__dirname, "../out/items.json");

const materials = {};

async function start() {
    const src = await download(srcFile);

    let matches;
    while ((matches = regex.exec(src)) !== null) {
        if (matches.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        const materialName = matches[1];
        
        // Skip legacy materials
        if (materialName.includes("LEGACY_")) continue;

        console.log(`Adding material: ${materialName}`);
        addMaterial(asMaterial(materialName));
    }

    console.log("Saving found materials...");
    await fs.writeFile(outPath, JSON.stringify(materials, null, 4));
    console.log("Done");
}

function asMaterial(name) {
    return { name };
}

function addMaterial(material) {
    const keys = processAliases(material);
    const mainKey = keys.shift();

    materials[mainKey] = material; // Store the material object once

    console.log(`Adding ${mainKey} with aliases: ${keys}`);

    keys.filter(key => key !== mainKey) // Ensure the actual material key never gets overridden by mistake
        .forEach(key => {
            materials[key] = mainKey; // Store a reference to the key holding the material object
        });
}

if (require.main === module) {
    start();
}
