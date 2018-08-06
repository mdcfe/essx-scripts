const modifiers = {
    long: ["2", "long", "extended", "ex", "level2"],
    strong: ["ii", "strong", "levelii"]
}

const potions = {
    empty: ["empty"],
    water: ["water"],
    mundane: ["mundane"],
    thick: ["thick"],
    awkward: ["awkward"],

    night_vision: ["nightvision", "nv", "nvision", "nightv", "darkvis", "dvision", "darkv"],
    long_night_vision: { ref: "night_vision", modifier: "long" },
    
    invisibility: ["invisibility", "invis", "invisible", "inv"],
    long_invisibility: { ref: "invisibility", modifier: "long" },
    
    leaping: ["leaping", "leap"],
    strong_leaping: { ref: "leaping", modifier: "strong" },
    long_leaping: { ref: "leaping", modifier: "long" },
    
    fire_resistance: ["fireresist", "fireres", "fireresistance"],
    long_fire_resistance: { ref: "fire_resistance", modifier: "long" },
    
    swiftness: ["swiftness", "swift", "speed"],
    strong_swiftness: { ref: "swiftness", modifier: "strong" },
    long_swiftness: { ref: "swiftness", modifier: "long" },
    
    slowness: ["slowness", "slow"],
    long_slowness: { ref: "slowness", modifier: "long" },
    
    water_breathing: ["waterbreathing", "wb", "waterbreath", "breathing", "breath"],
    long_water_breathing: { ref: "water_breathing", modifier: "long" },
    
    healing: ["healing", "heal", "life", "h"],
    strong_healing: { ref: "healing", modifier: "strong" },
    
    harming: ["harming", "damage", "dmg", "d"],
    strong_harming: { ref: "harming", modifier: "strong" },
    
    poison: ["poison", "acid", "p"],
    strong_poison: { ref: "poison", modifier: "strong" },
    long_poison: { ref: "poison", modifier: "long" },
    
    regeneration: ["regeneration", "regenerate", "regen"],
    strong_regeneration: { ref: "regeneration", modifier: "strong" },
    long_regeneration: { ref: "regeneration", modifier: "long" },
    
    strength: ["strength", "strong", "str"],
    strong_strength: { ref: "strength", modifier: "strong" },
    long_strength: { ref: "strength", modifier: "long" },
    
    weakness: ["weakness", "weak", "we"],
    long_weakness: { ref: "weakness", modifier: "long" },
    
    luck: ["luck", "lucky"],
    
    turtle_master: ["turtlemaster", "turtle", "tm"],
    strong_turtle_master: { ref: "turtle_master", modifier: "strong" },
    long_turtle_master: { ref: "turtle_master", modifier: "long" },
    
    slow_falling: ["slowfalling", "slowfall", "sf"],
    long_slow_falling: { ref: "slow_falling", modifier: "long" }
};

// $ -> potion name, * -> modifier
const materials = {
    POTION: ["$*potion", "$*pot", "potionof$*", "potof$*"],
    SPLASH_POTION: ["splash$*potion", "spl$*potion", "$*splashpotion", "splash$*pot", "spl$*pot", "$*splashpot"],
    LINGERING_POTION: ["lingerpot$*", "$lingerpot*", "aoepotion$*", "$aoepoiont*", "aoepot$*", "$aoepot*", "areapotion$*", "$areapotion*", "areapot$*", "$areapot*", "cloudpotion$*", "$cloudpotion*", "cloudpot$*", "$cloudpot*"],
    TIPPED_ARROW: ["arrow$*", "$arrow*"]
}

module.exports = { modifiers, potions, materials };
