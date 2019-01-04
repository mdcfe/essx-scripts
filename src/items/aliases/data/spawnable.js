const prefixes = {
    // Priority
    ZOMBIE_PIGMAN: ["zombiepigman", "zpigman", "pigman", "zombiepman", "zpman", "zombiepigm", "zpigm", "zombiepig", "zpig", "zombiepm", "zombiep"],
    ZOMBIE_VILLAGER: ["zombievillager", "zvillager", "deadvillager", "dvillager", "zvill", "dvill"],
    CAVE_SPIDER: ["cavespider"],
    ZOMBIE_HORSE: ["zombiehorse", "zhorse"],
    SKELETON_HORSE: ["skeletonhorse", "shorse", "bonehorse"],
    ELDER_GUARDIAN: ["elderguardian", "eguardian"],
    WITHER_SKELETON: ["witherskeleton", "wskeleton", "withersk", "wsk", "wither"],
    // Player heads
    PLAYER: ["", "player", "p", "steve", "human"],
    // All other mobs from items.csv
    CREEPER: ["creeper", "cr"],
    SKELETON: ["skeleton", "sk"],
    SPIDER: ["spider"],
    GIANT: ["giant"],
    ZOMBIE: ["zombie"],
    SLIME: ["slime"],
    ENDERMAN: ["enderman"],
    SILVERFISH: ["silverfish"],
    BLAZE: ["blaze"],
    MAGMA_CUBE: ["lavaslime", "lavacube", "magmacube", "magmaslime"],
    BAT: ["bat"],
    WITCH: ["witch"],
    ENDERMITE: ["endermite"],
    GHAST: ["ghast"],
    GUARDIAN: ["guardian"],
    SHULKER: ["shulker", "shulk"],
    PIG: ["pig", ""], // PIG is the default
    SHEEP: ["sheep"],
    COW: ["cow"],
    CHICKEN: ["chicken"],
    SQUID: ["squid"],
    WOLF: ["wolf"],
    MOOSHROOM: ["mooshroom", "mushroom"],
    SNOW_GOLEM: ["snowgolem", "sgolem"],
    OCELOT: ["ocelot", "cat"],
    IRON_GOLEM: ["irongolem", "igolem"],
    HORSE: ["horse"],
    RABBIT: ["rabbit"],
    POLAR_BEAR: ["polarbear", "polar", "bear"],
    PARROT: ["parrot"],
    VILLAGER: ["villager"],
    // Mobs missing from items.csv
    HUSK: ["husk"],
    STRAY: ["stray"],
    EVOKER: ["evoker"],
    VEX: ["vex"],
    VINDICATOR: ["vindicator", "vin"],
    DONKEY: ["donkey"],
    MULE: ["mule"],
    LLAMA: ["llama"],
    TURTLE: ["turtle"],
    PHANTOM: ["phantom"],
    COD: ["cod"],
    SALMON: ["salmon"],
    PUFFERFISH: ["pufferfish", "puffer", "pfish"],
    TROPICAL_FISH: ["tropicalfish", "tropicfish", "tfish", "tropicalf", "tropicf"],
    DROWNED: ["drowned"],
    DOLPHIN: ["dolphin", "ecco"],
    DRAGON: ["dragon"],
};

const suffixes = {
    SPAWN_EGG: ["egg", "!egg", "spawnegg", "!spawnegg", "spawn", "!spawn"],
    HEAD: ["head", "skull", "!head", "!steve", "mask", "headmask"],
    SKULL: ["head", "skull", "!head", "!steve", "mask", "headmask"],
    BUCKET: ["bucket", "pail"],
};

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = ["egg"];

module.exports = { prefixes, suffixes, protected }
