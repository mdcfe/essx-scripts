// Wood types
const prefixes = {
};

// Types of material
const suffixes = {
    // These should be preferred over shorter materials
    // All other materials
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
// eg. prevents WHITE_STAINED_GLASS overriding "glass"
const protected = [];

module.exports = { prefixes, suffixes, protected };
