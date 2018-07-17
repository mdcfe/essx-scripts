module.exports = {
    prep: null,
    test: () => true,
    get: ({ name }) => name.toLowerCase().replace(/_/g, "")
}