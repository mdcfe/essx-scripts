/**
 * genPermsCsv
 * 
 * Generates a permissions.csv file based on the permSearch output.
 * (permSearch's use of promises isn't exactly sane.)
 */

const fs = require("fs-extra");

const permSearch = require("./permSearch");

const replacer = (key, value) => value === null ? "" : value;

async function start() {
    const perms = await permSearch.promise;
    const header = Object.keys(perms[0]);

    const csvRows = perms.map(row =>
                    header.map(field =>
                        JSON.stringify(row[field], replacer))
                    .join(","));
    
    csvRows.unshift(header.join(","));

    const csv = csvRows.join("\r\n");

    await fs.writeFile("../out/permissions.csv", csv);

    return csv;
}

start();
