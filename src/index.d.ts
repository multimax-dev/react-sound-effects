export type SoundEffect = {
    name: string;
    file: string;
    tags?: string[];
};

export declare const usePlaySoundEffect: () => {
    playSound: (soundLoader: () => Promise<SoundEffect>) => void;
};

export declare const soundEffectsDictionary: Record<string, SoundEffect>;

export type SoundEffectFunction = () => Promise<SoundEffect>;

export declare const Bell: SoundEffectFunction;
export declare const Boom: SoundEffectFunction;
export declare const DrumRoll: SoundEffectFunction;
export declare const MouseClick: SoundEffectFunction;
export declare const Pop: SoundEffectFunction;
export declare const Ping: SoundEffectFunction;
export declare const Typing: SoundEffectFunction;
export declare const SnareDrum: SoundEffectFunction;
export declare const ClapsSolo: SoundEffectFunction;
export declare const ChildrenYay: SoundEffectFunction;

