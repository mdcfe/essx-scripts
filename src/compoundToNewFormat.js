const y = require("./items/aliases/data/wood").suffixes;

const z = {};
Object.keys(y).forEach(k => z[k] = y[k].map(s => s.includes("!") ? s.replace("!", "") + "%s" : (s.includes("$") ? s.replace("$", "%s") : "%s" + s)));
console.log(JSON.stringify(z, null, 2));
