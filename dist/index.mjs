import { useState } from 'react';
import { Howl } from 'howler';

// Dynamically import all MP3 files from assets directory
const soundModules = import.meta.glob("../sounds/assets/*.mp3", {
    eager: true,
});
// Convert the file paths into a more usable format
const soundFiles = Object.entries(soundModules).reduce((acc, [path, module]) => {
    // Extract the filename without extension as the key
    // e.g., '../assets/ping.mp3' becomes 'ping'
    const soundName = path.split("/").pop()?.replace(".mp3", "") ?? "";
    return {
        ...acc,
        [soundName]: module.default,
    };
}, {});
// Hook for playing sound effect
const usePlaySoundEffect = () => {
    const [currentSound, setCurrentSound] = useState();
    const handlePlay = (soundEffect) => {
        if (currentSound) {
            currentSound.stop();
        }
        const soundSrc = soundFiles[soundEffect.name];
        const newSound = new Howl({
            src: [soundSrc],
            onend: () => {
                setCurrentSound(null);
            },
        });
        newSound.play();
        setCurrentSound(newSound);
    };
    return { handlePlay };
};

const soundEffects = {
    Boom: {
        name: "boom",
        tags: ["celebration", "percussion", "drum", "instrument"],
    },
    DrumRoll: {
        name: "drum-roll",
        tags: ["celebration", "percussion", "drum", "instrument"],
    },
    Baddum: {
        name: "baddum",
        tags: ["celebration", "percussion", "drum", "instrument"],
    },
    MouseClick: {
        name: "mouse-click",
        tags: ["thocky", "computer", "typing"],
    },
    MouseClickLight: {
        name: "mouse-click-light",
        tags: ["thocky", "computer", "typing"],
    },
    Pop: {
        name: "pop",
        tags: [],
    },
    Ping: {
        name: "ping",
        tags: [],
    },
    Typing: {
        name: "typing",
        tags: ["thocky", "keyboard", "computer", "typing"],
    },
    MarimbaHit: {
        name: "marimba-hit",
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    Bell: {
        name: "bell",
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    BellOffTune: {
        name: "bell-off-tune",
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MarimbaBright: {
        name: "marimba-bright",
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MarimbaBassLow: {
        name: "marimba-bass-low",
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MetallicHitLow: {
        name: "metallic-hit-low",
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MetallicHitHigh: {
        name: "metallic-hit-high",
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    BanjoStrum: {
        name: "banjo-strum",
        tags: ["guitar", "instrument", "banjo", "notification"],
    },
    GuitarEcho: {
        name: "guitar-echo",
        tags: ["guitar", "instrument", "notification"],
    },
    GuitarStrum: {
        name: "guitar-strum",
        tags: ["guitar", "instrument", "notification"],
    },
    HiHatMedium: {
        name: "hi-hat-medium",
        tags: ["percussion", "drum", "instrument"],
    },
    HiHatHigh: {
        name: "hi-hat-high",
        tags: ["percussion", "drum", "instrument"],
    },
    Pluck: {
        name: "pluck",
        tags: ["guitar", "instrument"],
    },
    PluckHigh: {
        name: "pluck-high",
        tags: ["guitar", "instrument"],
    },
    KickBounce: {
        name: "kick-bounce",
        tags: ["percussion", "kick", "bass", "big"],
    },
    KickShort: {
        name: "kick-short",
        tags: ["percussion", "kick", "bass", "big"],
    },
    SnareDrum: {
        name: "snare-drum",
        tags: ["percussion", "instrument", "drum"],
    },
    ShakerEcho: {
        name: "shaker-echo",
        tags: ["percussion", "instrument", "soft"],
    },
    Tambourine: {
        name: "tambourine",
        tags: ["percussion", "instrument", "soft"],
    },
    Bongo: {
        name: "bongo",
        tags: ["percussion", "instrument", "soft"],
    },
    BongoHigh: {
        name: "bongo-high",
        tags: ["percussion", "instrument", "soft"],
    },
    TypingSoft: {
        name: "typing-soft",
        tags: ["thocky", "keyboard", "computer"],
    },
    TypingSoftLow: {
        name: "typing-soft-low",
        tags: ["thocky", "keyboard", "computer"],
    },
    TypingSoftLowFast: {
        name: "typing-soft-low-fast",
        tags: ["thocky", "keyboard", "typing", "computer"],
    },
    TypingHigh: {
        name: "typing-high",
        tags: ["thocky", "keyboard", "typing", "computer"],
    },
    MouseClickLow: {
        name: "mouse-click-low",
        tags: ["mouse", "click", "low"],
    },
    MouseDoubleClick: {
        name: "mouse-double-click",
        tags: ["mouse", "click", "double-click"],
    },
    MouseClickCleanLight: {
        name: "mouse-click-clean-light",
        tags: ["mouse", "click", "clean"],
    },
    ClapsSolo: {
        name: "claps-solo",
        tags: ["human", "clap", "celebration", "funny"],
    },
    ClapsQuiet: {
        name: "claps-quiet",
        tags: ["human", "clap", "celebration"],
    },
    ClapsWoo: {
        name: "claps-woo",
        tags: ["human", "clap", "celebration"],
    },
    ClapsCheer: {
        name: "claps-cheer",
        tags: ["human", "clap", "cheer", "celebration"],
    },
    ChildrenYay: {
        name: "children-yay",
        tags: ["human", "cheer", "celebration"],
    },
    Squeak: {
        name: "squeak",
        tags: [],
    },
    Wind: {
        name: "wind",
        tags: ["ambient"],
    },
    RecordScratch: {
        name: "record-scratch",
        tags: [],
    },
    RecordScratchLow: {
        name: "record-scratch-low",
        tags: [],
    },
    Cowbell: {
        name: "cowbell",
        tags: ["percussion", "instrument", "soft", "ping", "notification"],
    },
};

export { soundEffects, usePlaySoundEffect };
