import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { usePlaySoundEffect, Bell } from "../src";

const PlayBellExample: React.FC = () => {
  const { playSound } = usePlaySoundEffect();

  return (
    <div style={{ padding: "2rem", background: "#f5f5f5", borderRadius: "8px" }}>
      <h3>Play Bell</h3>
      <button key={'Bell'} onClick={() => playSound(Bell)}>
        Bell
      </button>
    </div>
  );
}

type Story = StoryFn<typeof PlayBellExample>;

const meta: Meta<typeof PlayBellExample> = {
  title: 'PlaySound',
  component: PlayBellExample,
};

export default meta;

const Template: Story = () => <PlayBellExample />;

export const Default = Template.bind({});
Default.storyName = "Play Bell";
