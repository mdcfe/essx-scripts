/**
 * itemsCoverage
 *
 * Compares items.json to items.csv; reports missing/extra aliases in items.json.
 */

const fs = require("fs-extra");
const path = require("path");
const _ = require("lodash");

const download = require("../src/util/dl");
const excludes = require("./data/itemExclusions");

const itemsJsonPath = path.resolve(__dirname, "../out/items.json");
const itemsCsvUrl = "https://raw.githubusercontent.com/EssentialsX/Essentials/2.x/Essentials/src/items.csv";
const reportPath = path.resolve(__dirname, "../out/items.report.json");

const itemsCsvRegex = /^([a-z]+),/gm;

async function start() {
    const itemsJson = await fs.readFile(itemsJsonPath, "utf-8");
    const itemsCsv = await download(itemsCsvUrl);

    const jsonObj = JSON.parse(itemsJson.replace("#version: ${full.version}", ""));

    const jsonKeys = Object.keys(jsonObj);
    const csvKeys = getCsvAliases(itemsCsv.replace("\\n", "\n"));

    const jsonMissing = _.difference(csvKeys, jsonKeys)
        .filter(s => !excludes(s));
    const jsonExtra = _.difference(jsonKeys, csvKeys);
    const jsonPresent = _.intersection(jsonKeys, csvKeys);

    const jsonCoveredCount = csvKeys.length - jsonMissing.length;

    const jsonNotOversizedKeys = jsonKeys.filter(key => key.length < 15).map(key => {
        if (typeof jsonObj[key] === "string") {
            return jsonObj[key];
        } else {
            return key;
        }
    }).filter(val => typeof val === "string");
    const jsonOversized = jsonKeys.filter(key => (typeof jsonObj[key] !== "string"))
                                .filter(key => !jsonNotOversizedKeys.includes(key));

    await fs.writeFile(reportPath, JSON.stringify({
        stats: {
            csvTotal: csvKeys.length,
            jsonTotal: jsonKeys.length,
            present: jsonPresent.length,
            missing: jsonMissing.length,
            extra: jsonExtra.length,
            covered: jsonCoveredCount,
            coverage: ((jsonCoveredCount / csvKeys.length) * 100).toFixed(2)
        },
        oversized: jsonOversized,
        missing: jsonMissing,
        extra: jsonExtra
    }, null, 4));
    console.log("Items report saved.");
}

function getCsvAliases(csv) {
    let aliases = [];
    let m;

    while ((m = itemsCsvRegex.exec(csv)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === itemsCsvRegex.lastIndex) {
            itemsCsvRegex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        aliases.push(m[1]);
    }
    return aliases;
}

if (require.main === module) {
    start();
}
