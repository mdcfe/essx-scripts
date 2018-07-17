const _ = require("lodash");

const processes = [
    require("./simple"),
    require("./color")
];

module.exports = function process(material) {
    return _.flatten(
        processes.map(p =>
            p.test(material) ? p.get(material) : []
        ));
}
