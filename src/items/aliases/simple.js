module.exports = {
    test: ({ skipSimple }) => !skipSimple,
    get: ({ material }) => [
        material.toLowerCase(), // PINEAPPLE_PLANT -> pineapple_plant
        material.toLowerCase().replace(/_/g, "") // PINEAPPLE_PLANT -> pineappleplant
    ]
}
