import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { usePlaySoundEffect, soundEffects } from "../src";

const PlayAllSoundsExample: React.FC = () => {
  const { handlePlay } = usePlaySoundEffect();

  return (
    <div style={{ padding: "2rem", background: "#f5f5f5", borderRadius: "8px" }}>
      <h3>Play all sounds</h3>
      {Object.entries(soundEffects).map(([label, soundEffect]) => (
        <button key={label} onClick={() => handlePlay(soundEffect)}>
          {label}
        </button>
      ))}
    </div>
  );
};

const PlayBellExample: React.FC = () => {
  const { handlePlay } = usePlaySoundEffect();

  return (
    <div style={{ padding: "2rem", background: "#f5f5f5", borderRadius: "8px" }}>
      <h3>Play Bell</h3>
      <button key={'Bell'} onClick={() => handlePlay(soundEffects.Bell)}>
        {'Bell'}
      </button>
    </div>
  );
}

const meta: Meta<typeof PlayAllSoundsExample> = {
  title: "Hooks/usePlaySound",
  component: PlayAllSoundsExample,
  parameters: {
    docs: {
      description: {
        component: 'A hook to play sound effects in your React application'
      }
    }
  }
};

export default meta;

type Story = StoryFn<typeof PlayAllSoundsExample>;

const Template: Story = () => <PlayAllSoundsExample />;

export const Default = Template.bind({});
Default.storyName = "Play All Sounds";

export const PlayBellStory: StoryFn<typeof PlayBellExample> = () => (
  <PlayBellExample />
);

PlayBellStory.storyName = "Play Bell";
