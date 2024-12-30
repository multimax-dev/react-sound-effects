export type SoundEffect = {
    name: string;
    file: string;
    tags?: string[];
};

export declare const usePlaySoundEffect: () => {
    playSound: (soundLoader: () => Promise<SoundEffect>) => void;
};

export declare const Bell: () => Promise<SoundEffect>;
