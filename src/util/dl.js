const axios = require("axios");

module.exports = async function download(url) {
    console.log(`Downloading source file: ${url} ...`);

    const { data, status, statusText } = await axios(url);

    if (status >= 400) {
        console.log(`Error ${status} while downloading from ${url}: ${statusText}`);
        return "";
    }

    return data;
}