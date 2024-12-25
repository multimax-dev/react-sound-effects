import { useState } from "react";
import { Howl } from "howler";
import { SoundEffect } from "../types";

// Dynamically import all MP3 files from assets directory
const soundModules = import.meta.glob("../sounds/assets/*.mp3", {
  eager: true,
});

// Convert the file paths into a more usable format
const soundFiles = Object.entries(soundModules).reduce(
  (acc, [path, module]) => {
    // Extract the filename without extension as the key
    // e.g., '../assets/ping.mp3' becomes 'ping'
    const soundName = path.split("/").pop()?.replace(".mp3", "") ?? "";
    return {
      ...acc,
      [soundName]: (module as { default: string }).default,
    };
  },
  {} as Record<string, string>
);

// Hook for playing sound effect
export const usePlaySoundEffect = () => {
  const [currentSound, setCurrentSound] = useState<Howl | null>();

  const handlePlay = (soundEffect: SoundEffect) => {
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
