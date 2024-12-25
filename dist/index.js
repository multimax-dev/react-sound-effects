'use strict';

var react = require('react');
var howler = require('howler');

const usePlaySoundEffect = () => {
    const [currentSound, setCurrentSound] = react.useState(null);
    const handlePlay = (soundEffect) => {
        console.log("handlePlay triggered");
        if (currentSound) {
            currentSound.stop();
        }
        console.log(soundEffect);
        const newSound = new howler.Howl({
            src: [soundEffect.file],
            onend: () => {
                setCurrentSound(null);
            },
        });
        newSound.play();
        setCurrentSound(newSound);
    };
    return { handlePlay };
};

var boom = "319bc8c285862625.mp3";

var drumRoll = "49f13fb2329a946f.mp3";

var baddum = "555d4782d0290fdd.mp3";

var mouseClick = "4331c31ea8e40e9a.mp3";

var mouseClickLight = "73c1df5c532c7ccc.mp3";

var pop = "6ec7c0d08a0035d7.mp3";

var ping = "19c692c3d9656417.mp3";

var typing = "c957fc850f1f325c.mp3";

var marimbaHit = "e390ff2c5d352744.mp3";

var bell = "d203ccd81addf177.mp3";

var bellOffTune = "0685df08e7576ed6.mp3";

var marimbaBright = "b58b63fd6803b6fa.mp3";

var marimbaBassLow = "beb16eba48e0ae08.mp3";

var metallicHitLow = "1cfae6c4685d916b.mp3";

var metallicHitHigh = "d742634637ba931c.mp3";

var banjoStrum = "a74465714989dd4b.mp3";

var guitarEcho = "96ba62435797c1ac.mp3";

var guitarStrum = "a5973c379baf7515.mp3";

var hiHatMedium = "81baf9bfdc002e23.mp3";

var hiHatHigh = "81a5d33558f020d4.mp3";

var pluck = "f84ce98d4482849b.mp3";

var pluckHigh = "be6f0d5afb9d2da1.mp3";

var kickBounce = "e2424c290c871f82.mp3";

var kickShort = "c1d67ff1966e583e.mp3";

var snareDrum = "8ae1f09fb765cbba.mp3";

var shakerEcho = "a4363367ef23740b.mp3";

var tambourine = "adad06e51fd700b7.mp3";

var bongo = "5b5f1e0fafe50fb4.mp3";

var bongoHigh = "65c6a372486ffd19.mp3";

var typingSoft = "a46e7399e66ec8b7.mp3";

var typingSoftLow = "699fd436deaa4729.mp3";

var typingSoftLowFast = "8eddce35a670a8ff.mp3";

var typingHigh = "7ad47036276b20dc.mp3";

var mouseClickLow = "f4c51ffe74bf650d.mp3";

var mouseDoubleClick = "dadff272df3264e4.mp3";

var mouseClickCleanLight = "d2978d8c7d1ffef7.mp3";

var clapsSolo = "fd9a67bd1a96f0cc.mp3";

var clapsQuiet = "ca8ff6761a38c4fd.mp3";

var clapsWoo = "d83c35cc7ea92615.mp3";

var clapsCheer = "d03094f1c97f9ae2.mp3";

var childrenYay = "f457572479324162.mp3";

var squeak = "4020cc770bdc666a.mp3";

var wind = "8f3ee14d07f858d5.mp3";

var recordScratch = "100a7a8ba72cad56.mp3";

var recordScratchLow = "d5b65ea503ced389.mp3";

var cowbell = "1910266d1c3561da.mp3";

const soundEffects = {
    Boom: {
        name: "boom",
        file: boom,
        tags: ["celebration", "percussion", "drum", "instrument"],
    },
    DrumRoll: {
        name: "drum-roll",
        file: drumRoll,
        tags: ["celebration", "percussion", "drum", "instrument"],
    },
    Baddum: {
        name: "baddum",
        file: baddum,
        tags: ["celebration", "percussion", "drum", "instrument"],
    },
    MouseClick: {
        name: "mouse-click",
        file: mouseClick,
        tags: ["thocky", "computer", "typing"],
    },
    MouseClickLight: {
        name: "mouse-click-light",
        file: mouseClickLight,
        tags: ["thocky", "computer", "typing"],
    },
    Pop: {
        name: "pop",
        file: pop,
        tags: [],
    },
    Ping: {
        name: "ping",
        file: ping,
        tags: [],
    },
    Typing: {
        name: "typing",
        file: typing,
        tags: ["thocky", "keyboard", "computer", "typing"],
    },
    MarimbaHit: {
        name: "marimba-hit",
        file: marimbaHit,
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    Bell: {
        name: "bell",
        file: bell,
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    BellOffTune: {
        name: "bell-off-tune",
        file: bellOffTune,
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MarimbaBright: {
        name: "marimba-bright",
        file: marimbaBright,
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MarimbaBassLow: {
        name: "marimba-bass-low",
        file: marimbaBassLow,
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MetallicHitLow: {
        name: "metallic-hit-low",
        file: metallicHitLow,
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    MetallicHitHigh: {
        name: "metallic-hit-high",
        file: metallicHitHigh,
        tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
    },
    BanjoStrum: {
        name: "banjo-strum",
        file: banjoStrum,
        tags: ["guitar", "instrument", "banjo", "notification"],
    },
    GuitarEcho: {
        name: "guitar-echo",
        file: guitarEcho,
        tags: ["guitar", "instrument", "notification"],
    },
    GuitarStrum: {
        name: "guitar-strum",
        file: guitarStrum,
        tags: ["guitar", "instrument", "notification"],
    },
    HiHatMedium: {
        name: "hi-hat-medium",
        file: hiHatMedium,
        tags: ["percussion", "drum", "instrument"],
    },
    HiHatHigh: {
        name: "hi-hat-high",
        file: hiHatHigh,
        tags: ["percussion", "drum", "instrument"],
    },
    Pluck: {
        name: "pluck",
        file: pluck,
        tags: ["guitar", "instrument"],
    },
    PluckHigh: {
        name: "pluck-high",
        file: pluckHigh,
        tags: ["guitar", "instrument"],
    },
    KickBounce: {
        name: "kick-bounce",
        file: kickBounce,
        tags: ["percussion", "kick", "bass", "big"],
    },
    KickShort: {
        name: "kick-short",
        file: kickShort,
        tags: ["percussion", "kick", "bass", "big"],
    },
    SnareDrum: {
        name: "snare-drum",
        file: snareDrum,
        tags: ["percussion", "instrument", "drum"],
    },
    ShakerEcho: {
        name: "shaker-echo",
        file: shakerEcho,
        tags: ["percussion", "instrument", "soft"],
    },
    Tambourine: {
        name: "tambourine",
        file: tambourine,
        tags: ["percussion", "instrument", "soft"],
    },
    Bongo: {
        name: "bongo",
        file: bongo,
        tags: ["percussion", "instrument", "soft"],
    },
    BongoHigh: {
        name: "bongo-high",
        file: bongoHigh,
        tags: ["percussion", "instrument", "soft"],
    },
    TypingSoft: {
        name: "typing-soft",
        file: typingSoft,
        tags: ["thocky", "keyboard", "computer"],
    },
    TypingSoftLow: {
        name: "typing-soft-low",
        file: typingSoftLow,
        tags: ["thocky", "keyboard", "computer"],
    },
    TypingSoftLowFast: {
        name: "typing-soft-low-fast",
        file: typingSoftLowFast,
        tags: ["thocky", "keyboard", "typing", "computer"],
    },
    TypingHigh: {
        name: "typing-high",
        file: typingHigh,
        tags: ["thocky", "keyboard", "typing", "computer"],
    },
    MouseClickLow: {
        name: "mouse-click-low",
        file: mouseClickLow,
        tags: ["mouse", "click", "low"],
    },
    MouseDoubleClick: {
        name: "mouse-double-click",
        file: mouseDoubleClick,
        tags: ["mouse", "click", "double-click"],
    },
    MouseClickCleanLight: {
        name: "mouse-click-clean-light",
        file: mouseClickCleanLight,
        tags: ["mouse", "click", "clean"],
    },
    ClapsSolo: {
        name: "claps-solo",
        file: clapsSolo,
        tags: ["human", "clap", "celebration", "funny"],
    },
    ClapsQuiet: {
        name: "claps-quiet",
        file: clapsQuiet,
        tags: ["human", "clap", "celebration"],
    },
    ClapsWoo: {
        name: "claps-woo",
        file: clapsWoo,
        tags: ["human", "clap", "celebration"],
    },
    ClapsCheer: {
        name: "claps-cheer",
        file: clapsCheer,
        tags: ["human", "clap", "cheer", "celebration"],
    },
    ChildrenYay: {
        name: "children-yay",
        file: childrenYay,
        tags: ["human", "cheer", "celebration"],
    },
    Squeak: {
        name: "squeak",
        file: squeak,
        tags: [],
    },
    Wind: {
        name: "wind",
        file: wind,
        tags: ["ambient"],
    },
    RecordScratch: {
        name: "record-scratch",
        file: recordScratch,
        tags: [],
    },
    RecordScratchLow: {
        name: "record-scratch-low",
        file: recordScratchLow,
        tags: [],
    },
    Cowbell: {
        name: "cowbell",
        file: cowbell,
        tags: ["percussion", "instrument", "soft", "ping", "notification"],
    },
};

exports.soundEffects = soundEffects;
exports.usePlaySoundEffect = usePlaySoundEffect;
