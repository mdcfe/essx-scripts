module.exports = {
    prep: null,
    test: ({ skipSimple }) => !!skipSimple,
    get: ({ name }) => name.toLowerCase().replace(/_/g, "")
}