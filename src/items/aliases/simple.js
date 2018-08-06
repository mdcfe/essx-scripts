module.exports = {
    prep: null,
    test: ({ skipSimple }) => !skipSimple,
    get: ({ name }) => [
        name.toLowerCase(), // PINEAPPLE_PLANT -> pineapple_plant
        name.toLowerCase().replace(/_/g, "") // PINEAPPLE_PLANT -> pineappleplant
    ]
}