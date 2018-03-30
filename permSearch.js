const walk = require("walk");
const fs = require("fs-extra");
const path = require("path");

const regex = /\.isAuthorized\("([a-z.-]+)"\)/g;
const essRoot = "../../../GitKraken/EssentialsX";

const walker = walk.walk(essRoot);

let resolve, reject;

const promise = new Promise((res, rej) => {
    resolve = res; reject = rej;
});

const nodes = [];

walker.on("file", async (root, stats, next) => {
    const fileName = stats.name;

    module.exports.status = `started, ${fileName}`;

    if (fileName.indexOf(".java") !== -1) {
        const filePath = path.resolve(root, fileName);
        const contents = await fs.readFile(filePath);

        if (fileName.indexOf("Command") === 0) {
            const permNode = "essentials." +
                fileName.substring(7, fileName.length - 5);
            
            nodes.push(getNodeObject(permNode, filePath, fileName))
        }

        let matches;

        while ((matches = regex.exec(contents)) !== null) {
            if (matches.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            const permNode = matches[1];
            console.log(filePath, permNode);

            const node = getNodeObject(permNode, filePath, fileName);

            nodes.push(node);
        }
    }
    next();
});

walker.on("end", async () => {
    const sortedNodes = nodes.sort((nodeA, nodeB) => {
        // console.log(`${nodeA.module}: ${nodeA.name} - ${nodeB.module}: ${nodeB.name}`)
        if (nodeA.module !== nodeB.module) {
            return nodeA.module.localeCompare(nodeB.module);
        } else {
            return nodeA.name.localeCompare(nodeB.name);
        }
    });

    await fs.writeFile("./out/permissions.json", JSON.stringify(sortedNodes, null, 4));

    module.exports.sorted = sortedNodes;
    resolve(sortedNodes);
});

function getModule(filePath) {
    const relativePath = path.relative(essRoot, filePath);
    return relativePath.split(path.sep)[0];
}

function getCommandName(filename) {
    if (filename.includes("Command") && filename.includes(".java")) {
        return filename.substring(7, filename.length - 5);
    }
}

function getClass(filePath) {
    const relativePath = path.relative(essRoot, filePath);
    return relativePath.split(path.sep).slice(2).join(".").slice(0, -5);
}

function toUnixPath(inputPath) {
    return inputPath.split(path.sep).join("/");
}

function getNodeObject(permNode, filePath, fileName) {
    return {
        name: permNode,
        file: toUnixPath(path.relative(essRoot, filePath)),
        class: getClass(filePath),
        command: getCommandName(fileName),
        module: getModule(filePath)
    }
}

module.exports = {
    promise,
    status: "not started",
    unsorted: nodes
}
