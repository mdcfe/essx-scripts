/**
 * genPermsBase
 * 
 * Updates the permissionsBase.json file with newly-scanned permissions from permSearch.
 */

const fs = require("fs-extra");
const _ = require("lodash");

const permissions = require("../out/permissions.json");

const base = {};

permissions.forEach(perm => {
    if (!base[perm.name]) {
        base[perm.name] = {
            desc: "", // Description
            category: "", // Type of permission
            role: "", // Recommended group
            module: "", // EssentialsX module containing permission check
            commands: [], // Commands that utilise this
            classes: [], // Classes that utilise this
        }
    }

    base[perm.name].module = perm.module;

    if (base[perm.name].commands.indexOf(perm.command) < 0 && perm.command) {
        base[perm.name].commands.push(perm.command);
        if (perm.name.substring(11, perm.name.length) == perm.command) {
            base[perm.name].desc = `Allow access to the /${perm.command} command.`;
        }    
    }
    
    if (base[perm.name].classes.indexOf(perm.class) < 0 && perm.command) {
        base[perm.name].classes.push(perm.class);
    }
});

let out = base;

fs.exists("./out/permissionsBase.json")
    .then(exists => exists ? fs.readFile("./out/permissionsBase.json") : null)
    .then(contents => out = _.assign(base, JSON.parse(contents)))
    .then(() => fs.writeFile("./out/permissionsBase.json", JSON.stringify(out, null, 4)))
    .then(() => console.log("Done generating permissions list base"));
