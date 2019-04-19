/**
 * genItemsBase
 *
 * Pulls Materials from the Material enum class and generates items.json from them.
 */

const fs = require("fs-extra");
const path = require("path");

const retrieveMaterials = require("./items/materials");
const processAliases = require("./items/aliases");

const outPath = path.resolve(__dirname, "../out/items.json");

const filterProps = ["skipSimple"];

const materials = {};

async function start() {
    (await retrieveMaterials()).forEach(addMaterial);

    console.log("Saving found materials...");

    outString = "#version: ${full.version}\n" + JSON.stringify(materials, null, 4);
    await fs.writeFile(outPath, outString);

    console.log("Done");
}

function addMaterial(material) {
    const keys = processAliases(material);

    filterProps.forEach(prop => material[prop] = undefined);

    const mainKey = keys.shift();

    materials[mainKey] = material; // Store the material object once

    //console.log(`Adding ${mainKey} with aliases: ${keys}`);

    keys.filter(key => key !== mainKey) // Ensure the actual material key never gets overridden
        .forEach(key => {
            materials[key] = mainKey; // Store a reference to the key holding the material object
        });
}

if (require.main === module) {
    start();
}
