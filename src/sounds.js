export const Boom = async () => {
    const module = await import("./sounds/boom.mp3");
    return {
      name: "boom",
      file: module.default,
      tags: ["celebration", "percussion", "drum", "instrument"],
    };
  };
  
  export const Bell = async () => {
    const module = await import("./sounds/bell.mp3");
    return {
      name: "bell",
      file: module.default,
      tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    };
  };
  
  export const Baddum = async () => {
    const module = await import("./sounds/baddum.mp3");
    return {
      name: "baddum",
      file: module.default,
      tags: ["celebration", "percussion", "drum", "instrument"],
    };
  };
  
  export const DrumRoll = async () => {
    const module = await import("./sounds/drum-roll.mp3");
    return {
      name: "drum-roll",
      file: module.default,
      tags: ["celebration", "percussion", "drum", "instrument"],
    };
  };
  
  export const MouseClick = async () => {
    const module = await import("./sounds/mouse-click.mp3");
    return {
      name: "mouse-click",
      file: module.default,
      tags: ["thocky", "computer", "typing"],
    };
  };
  
  export const MouseClickLight = async () => {
    const module = await import("./sounds/mouse-click-light.mp3");
    return {
      name: "mouse-click-light",
      file: module.default,
      tags: ["thocky", "computer", "typing"],
    };
  };
  
  export const Pop = async () => {
    const module = await import("./sounds/pop.mp3");
    return {
      name: "pop",
      file: module.default,
    };
  };
  
  export const Ping = async () => {
    const module = await import("./sounds/ping.mp3");
    return {
      name: "ping",
      file: module.default,
    };
  };
  
  export const Typing = async () => {
    const module = await import("./sounds/typing.mp3");
    return {
      name: "typing",
      file: module.default,
      tags: ["thocky", "keyboard", "computer", "typing"],
    };
  };
  
  export const MarimbaHit = async () => {
    const module = await import("./sounds/marimba-hit.mp3");
    return {
      name: "marimba-hit",
      file: module.default,
      tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    };
  };
  
  export const BellOffTune = async () => {
    const module = await import("./sounds/bell-off-tune.mp3");
    return {
      name: "bell-off-tune",
      file: module.default,
      tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    };
  };
  
  export const MarimbaBright = async () => {
    const module = await import("./sounds/marimba-bright.mp3");
    return {
      name: "marimba-bright",
      file: module.default,
      tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    };
  };
  
  export const MarimbaBassLow = async () => {
    const module = await import("./sounds/marimba-bass-low.mp3");
    return {
      name: "marimba-bass-low",
      file: module.default,
      tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    };
  };
  
  export const MetallicHitLow = async () => {
    const module = await import("./sounds/metallic-hit-low.mp3");
    return {
      name: "metallic-hit-low",
      file: module.default,
      tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    };
  };
  
  export const MetallicHitHigh = async () => {
    const module = await import("./sounds/metallic-hit-high.mp3");
    return {
      name: "metallic-hit-high",
      file: module.default,
      tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    };
  };
  
  export const BanjoStrum = async () => {
    const module = await import("./sounds/banjo-strum.mp3");
    return {
      name: "banjo-strum",
      file: module.default,
      tags: ["guitar", "instrument", "banjo", "notification"],
    };
  };
  
  export const GuitarEcho = async () => {
    const module = await import("./sounds/guitar-echo.mp3");
    return {
      name: "guitar-echo",
      file: module.default,
      tags: ["guitar", "instrument", "notification"],
    };
  };
  
  export const GuitarStrum = async () => {
    const module = await import("./sounds/guitar-strum.mp3");
    return {
      name: "guitar-strum",
      file: module.default,
      tags: ["guitar", "instrument", "notification"],
    };
  };
  
  export const HiHatMedium = async () => {
    const module = await import("./sounds/hi-hat-medium.mp3");
    return {
      name: "hi-hat-medium",
      file: module.default,
      tags: ["percussion", "drum", "instrument"],
    };
  };
  
  export const HiHatHigh = async () => {
    const module = await import("./sounds/hi-hat-high.mp3");
    return {
      name: "hi-hat-high",
      file: module.default,
      tags: ["percussion", "drum", "instrument"],
    };
  };
  
  export const Pluck = async () => {
    const module = await import("./sounds/pluck.mp3");
    return {
      name: "pluck",
      file: module.default,
      tags: ["guitar", "instrument"],
    };
  };
  
  export const PluckHigh = async () => {
    const module = await import("./sounds/pluck-high.mp3");
    return {
      name: "pluck-high",
      file: module.default,
      tags: ["guitar", "instrument"],
    };
  };
  
  export const KickBounce = async () => {
    const module = await import("./sounds/kick-bounce.mp3");
    return {
      name: "kick-bounce",
      file: module.default,
      tags: ["percussion", "kick", "bass", "big"],
    };
  };
  
  export const KickShort = async () => {
    const module = await import("./sounds/kick-short.mp3");
    return {
      name: "kick-short",
      file: module.default,
      tags: ["percussion", "kick", "bass", "big"],
    };
  };
  
  export const SnareDrum = async () => {
    const module = await import("./sounds/snare-drum.mp3");
    return {
      name: "snare-drum",
      file: module.default,
      tags: ["percussion", "instrument", "drum"],
    };
  };
  
  export const ShakerEcho = async () => {
    const module = await import("./sounds/shaker-echo.mp3");
    return {
      name: "shaker-echo",
      file: module.default,
      tags: ["percussion", "instrument", "soft"],
    };
  };
  
  export const Tambourine = async () => {
    const module = await import("./sounds/tambourine.mp3");
    return {
      name: "tambourine",
      file: module.default,
      tags: ["percussion", "instrument", "soft"],
    };
  };
  
  export const Bongo = async () => {
    const module = await import("./sounds/bongo.mp3");
    return {
      name: "bongo",
      file: module.default,
      tags: ["percussion", "instrument", "soft"],
    };
  };
  
  export const BongoHigh = async () => {
    const module = await import("./sounds/bongo-high.mp3");
    return {
      name: "bongo-high",
      file: module.default,
      tags: ["percussion", "instrument", "soft"],
    };
  };
  
  export const TypingSoft = async () => {
    const module = await import("./sounds/typing-soft.mp3");
    return {
      name: "typing-soft",
      file: module.default,
      tags: ["thocky", "keyboard", "computer"],
    };
  };
  
  export const TypingSoftLow = async () => {
    const module = await import("./sounds/typing-soft-low.mp3");
    return {
      name: "typing-soft-low",
      file: module.default,
      tags: ["thocky", "keyboard", "computer"],
    };
  };
  
  export const TypingSoftLowFast = async () => {
    const module = await import("./sounds/typing-soft-low-fast.mp3");
    return {
      name: "typing-soft-low-fast",
      file: module.default,
      tags: ["thocky", "keyboard", "typing", "computer"],
    };
  };
  
  export const TypingHigh = async () => {
    const module = await import("./sounds/typing-high.mp3");
    return {
      name: "typing-high",
      file: module.default,
      tags: ["thocky", "keyboard", "typing", "computer"],
    };
  };
  
  export const MouseClickLow = async () => {
    const module = await import("./sounds/mouse-click-low.mp3");
    return {
      name: "mouse-click-low",
      file: module.default,
      tags: ["mouse", "click", "low"],
    };
  };
  
  export const MouseDoubleClick = async () => {
    const module = await import("./sounds/mouse-double-click.mp3");
    return {
      name: "mouse-double-click",
      file: module.default,
      tags: ["mouse", "click", "double-click"],
    };
  };
  
  export const MouseClickCleanLight = async () => {
    const module = await import("./sounds/mouse-click-clean-light.mp3");
    return {
      name: "mouse-click-clean-light",
      file: module.default,
      tags: ["mouse", "click", "clean"],
    };
  };
  
  export const ClapsSolo = async () => {
    const module = await import("./sounds/claps-solo.mp3");
    return {
      name: "claps-solo",
      file: module.default,
      tags: ["human", "clap", "celebration", "funny"],
    };
  };
  
  export const ClapsQuiet = async () => {
    const module = await import("./sounds/claps-quiet.mp3");
    return {
      name: "claps-quiet",
      file: module.default,
      tags: ["human", "clap", "celebration"],
    };
  };
  
  export const ClapsWoo = async () => {
    const module = await import("./sounds/claps-woo.mp3");
    return {
      name: "claps-woo",
      file: module.default,
      tags: ["human", "clap", "celebration"],
    };
  };
  
  export const ClapsCheer = async () => {
    const module = await import("./sounds/claps-cheer.mp3");
    return {
      name: "claps-cheer",
      file: module.default,
      tags: ["human", "clap", "cheer", "celebration"],
    };
  };
  
  export const ChildrenYay = async () => {
    const module = await import("./sounds/children-yay.mp3");
    return {
      name: "children-yay",
      file: module.default,
      tags: ["human", "cheer", "celebration"],
    };
  };
  
  export const Squeak = async () => {
    const module = await import("./sounds/squeak.mp3");
    return {
      name: "squeak",
      file: module.default,
    };
  };
  
  export const Wind = async () => {
    const module = await import("./sounds/wind.mp3");
    return {
      name: "wind",
      file: module.default,
      tags: ["ambient"],
    };
  };
  
  export const RecordScratch = async () => {
    const module = await import("./sounds/record-scratch.mp3");
    return {
      name: "record-scratch",
      file: module.default,
    };
  };
  
  export const RecordScratchLow = async () => {
    const module = await import("./sounds/record-scratch-low.mp3");
    return {
      name: "record-scratch-low",
      file: module.default,
    };
  };
  
  export const Cowbell = async () => {
    const module = await import("./sounds/cowbell.mp3");
    return {
      name: "cowbell",
      file: module.default,
      tags: ["percussion", "instrument", "soft", "ping", "notification"],
    };
  };