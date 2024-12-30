import { useState } from 'react';
import { Howl } from 'howler';

const usePlaySoundEffect = () => {
    const [currentSound, setCurrentSound] = useState(null);
    const playSound = (soundEffect) => {
        if (currentSound) {
            currentSound.stop();
        }
        const newSound = new Howl({
            src: [soundEffect.file],
            onend: () => {
                setCurrentSound(null);
            },
        });
        newSound.play();
        setCurrentSound(newSound);
    };
    return { playSound };
};

export { usePlaySoundEffect };
