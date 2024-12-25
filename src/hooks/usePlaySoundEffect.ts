import { useState } from "react";
import { Howl } from "howler";
import { SoundEffect } from "../types";

export const usePlaySoundEffect = () => {
  const [currentSound, setCurrentSound] = useState<Howl | null>();

  const handlePlay = (soundEffect: SoundEffect) => {
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

  return { handlePlay };
};
