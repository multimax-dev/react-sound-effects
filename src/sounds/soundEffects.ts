import { SoundEffect } from "../types";
import boom from './assets/boom.mp3';
import drumRoll from './assets/drum-roll.mp3';
import baddum from './assets/baddum.mp3';
import mouseClick from './assets/mouse-click.mp3';
import mouseClickLight from './assets/mouse-click-light.mp3';
import pop from './assets/pop.mp3';
import ping from './assets/ping.mp3';
import typing from './assets/typing.mp3';
import marimbaHit from './assets/marimba-hit.mp3';
import bell from './assets/bell.mp3';
import bellOffTune from './assets/bell-off-tune.mp3';
import marimbaBright from './assets/marimba-bright.mp3';
import marimbaBassLow from './assets/marimba-bass-low.mp3';
import metallicHitLow from './assets/metallic-hit-low.mp3';
import metallicHitHigh from './assets/metallic-hit-high.mp3';
import banjoStrum from './assets/banjo-strum.mp3';
import guitarEcho from './assets/guitar-echo.mp3';
import guitarStrum from './assets/guitar-strum.mp3';
import hiHatMedium from './assets/hi-hat-medium.mp3';
import hiHatHigh from './assets/hi-hat-high.mp3';
import pluck from './assets/pluck.mp3';
import pluckHigh from './assets/pluck-high.mp3';
import kickBounce from './assets/kick-bounce.mp3';
import kickShort from './assets/kick-short.mp3';
import snareDrum from './assets/snare-drum.mp3';
import shakerEcho from './assets/shaker-echo.mp3';
import tambourine from './assets/tambourine.mp3';
import bongo from './assets/bongo.mp3';
import bongoHigh from './assets/bongo-high.mp3';
import typingSoft from './assets/typing-soft.mp3';
import typingSoftLow from './assets/typing-soft-low.mp3';
import typingSoftLowFast from './assets/typing-soft-low-fast.mp3';
import typingHigh from './assets/typing-high.mp3';
import mouseClickLow from './assets/mouse-click-low.mp3';
import mouseDoubleClick from './assets/mouse-double-click.mp3';
import mouseClickCleanLight from './assets/mouse-click-clean-light.mp3';
import clapsSolo from './assets/claps-solo.mp3';
import clapsQuiet from './assets/claps-quiet.mp3';
import clapsWoo from './assets/claps-woo.mp3';
import clapsCheer from './assets/claps-cheer.mp3';
import childrenYay from './assets/children-yay.mp3';
import squeak from './assets/squeak.mp3';
import wind from './assets/wind.mp3';
import recordScratch from './assets/record-scratch.mp3';
import recordScratchLow from './assets/record-scratch-low.mp3';
import cowbell from './assets/cowbell.mp3';

export const soundEffects: Record<string, SoundEffect> = {
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
