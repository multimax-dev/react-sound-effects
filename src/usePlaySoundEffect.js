import { useState } from "react";
import { Howl } from "howler";

export const usePlaySoundEffect = () => {
  // Keep track of current Howl object
  const [currentSound, setCurrentSound] = useState(null);

  // Play an aysnc loaded sound
  const playSound = async (soundLoader) => {
    if (currentSound) {
      currentSound.stop();
    }

    // Dynamically load the sound definition
    const soundEffect = await soundLoader();

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
