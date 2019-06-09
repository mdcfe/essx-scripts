/* mergeItems
 *
 * Temporary; merges new items.json generator output into 1.13 generator output
 */

const fs = require("fs-extra");
const path = require("path");

const download = require("./util/dl");

const newJsonURL = "https://ci.ender.zone/job/EssentialsX-ItemDbGenerator/lastSuccessfulBuild/artifact/target/items.json";

const basePath = path.resolve(__dirname, "../out/items.json")
const outPath = path.resolve(__dirname, "../out/items.merged.json")

async function main() {
    let baseJsonStr = (await fs.readFile(basePath, "utf-8")).replace("#version: ${full.version}", "");
    const baseJson = JSON.parse(baseJsonStr);

    let newJsonStr = (await download(newJsonURL)).replace("#version: ${full.version}", "");
    const newJson = JSON.parse(newJsonStr);

    Object.keys(newJson).forEach(key => {
        if (baseJson[key] && baseJson[key] instanceof Object) return;

        baseJson[key] = newJson[key];
    });

    baseJson.sign = "oak_sign";

    await fs.writeFile(outPath, JSON.stringify(baseJson, null, 2));

    console.log("Merged items.json successfully.");
}

main();
