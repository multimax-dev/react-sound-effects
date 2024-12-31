export type SoundEffect = {
    name: string;
    file: string;
    tags?: string[];
};

export declare const usePlaySoundEffect: () => {
    playSound: (soundLoader: () => Promise<SoundEffect>) => void;
};

export type SoundEffectFunction = () => Promise<SoundEffect>;

export declare const Bell: SoundEffectFunction;
export declare const Boom: SoundEffectFunction;
export declare const Baddum: SoundEffectFunction;
export declare const DrumRoll: SoundEffectFunction;
export declare const MouseClick: SoundEffectFunction;
export declare const MouseClickLight: SoundEffectFunction;
export declare const Pop: SoundEffectFunction;
export declare const Ping: SoundEffectFunction;
export declare const Typing: SoundEffectFunction;
export declare const MarimbaHit: SoundEffectFunction;
export declare const BellOffTune: SoundEffectFunction;
export declare const MarimbaBright: SoundEffectFunction;
export declare const MarimbaBassLow: SoundEffectFunction;
export declare const MetallicHitLow: SoundEffectFunction;
export declare const MetallicHitHigh: SoundEffectFunction;
export declare const BanjoStrum: SoundEffectFunction;
export declare const GuitarEcho: SoundEffectFunction;
export declare const GuitarStrum: SoundEffectFunction;
export declare const HiHatMedium: SoundEffectFunction;
export declare const HiHatHigh: SoundEffectFunction;
export declare const Pluck: SoundEffectFunction;
export declare const PluckHigh: SoundEffectFunction;
export declare const KickBounce: SoundEffectFunction;
export declare const KickShort: SoundEffectFunction;
export declare const SnareDrum: SoundEffectFunction;
export declare const ShakerEcho: SoundEffectFunction;
export declare const Tambourine: SoundEffectFunction;
export declare const Bongo: SoundEffectFunction;
export declare const BongoHigh: SoundEffectFunction;
export declare const TypingSoft: SoundEffectFunction;
export declare const TypingSoftLow: SoundEffectFunction;
export declare const TypingSoftLowFast: SoundEffectFunction;
export declare const TypingHigh: SoundEffectFunction;
export declare const MouseClickLow: SoundEffectFunction;
export declare const MouseDoubleClick: SoundEffectFunction;
export declare const MouseClickCleanLight: SoundEffectFunction;
export declare const ClapsSolo: SoundEffectFunction;
export declare const ClapsQuiet: SoundEffectFunction;
export declare const ClapsWoo: SoundEffectFunction;
export declare const ClapsCheer: SoundEffectFunction;
export declare const ChildrenYay: SoundEffectFunction;
export declare const Squeak: SoundEffectFunction;
export declare const Wind: SoundEffectFunction;
export declare const RecordScratch: SoundEffectFunction;
export declare const RecordScratchLow: SoundEffectFunction;
export declare const Cowbell: SoundEffectFunction;

