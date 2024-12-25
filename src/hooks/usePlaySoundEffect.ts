import { useState } from "react";
import { Howl } from "howler";
import { SoundEffect } from "../types";

export const usePlaySoundEffect = () => {
  const [currentSound, setCurrentSound] = useState<Howl | null>(null);

  const handlePlay = (soundEffect: SoundEffect) => {
    console.log("handlePlay triggered")
    if (currentSound) {
      currentSound.stop();
    }
    console.log(soundEffect);
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
