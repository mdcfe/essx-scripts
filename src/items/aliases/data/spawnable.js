const prefixes = {
    // Priority
    ZOMBIE_PIGMAN: ["zombiepigman", "zpigman", "pigman", "zombiepman", "zpman", "zombiepigm", "zpigm", "zombiepig", "zpig", "zombiepm", "zombiep"],
    ZOMBIE_VILLAGER: ["zombievillager", "zvillager", "deadvillager"],
    CAVE_SPIDER: ["cavespider"],
    ZOMBIE_HORSE: ["zombiehorse", "zhorse"],
    SKELETON_HORSE: ["skeletonhorse", "shorse", "bonehorse"],
    ELDER_GUARDIAN: ["elderguardian", "eguardian"],
    // Player heads
    PLAYER: ["", "player", "p", "steve"],
    // All other mobs from items.csv
    CREEPER: ["creeper"],
    SKELETON: ["skeleton"],
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
    GUARDIAN: ["guardian"],
    SHULKER: ["shulker", "shulk"],
    PIG: ["pig"],
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
    WITHER_SKELETON: ["witherskeleton", "wskeleton", "withersk", "wsk"],
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
};

const suffixes = {
    SPAWN_EGG: ["egg", "!egg", "spawnegg", "!spawnegg"],
    HEAD: ["head", "skull"],
    SKULL: ["head", "skull"],
    BUCKET: ["bucket", "pail"],
};

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = ["egg"];

module.exports = { prefixes, suffixes, protected }
