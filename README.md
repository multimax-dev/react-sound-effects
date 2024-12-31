# react-sound-effects

**Add 50+ sound effects to your React app**

This is a library of sound effects that you can easily implement in your React app. Make your websites interactive and engaging!

✅ 100% free

✅ 50+ curated sound effects

✅ Implement within 1 minute

✅ Built for React

Visit [soundeffects.dev](https://soundeffects.dev) to play around with all sounds and read full details.

## Motivation
While there are many libraries for icons (ie.: Lucide), there's no easy-to-use libraries for sound effects. 

## When to use this package
Use this package to ...

1. Get direct access to 50+ curated free sound effects.
2. Use a hook to easily play sound effects.

## How to use

### 1) Install
Install using npm
```
npm install react-sound-effects
```

Install using yarn
```
yarn add react-sound-effects
```

### 2) Use
Below is an example
```javascript
import { usePlaySoundEffect, Bell } from 'react-sound-effects';

const ButtonThatPlaysBellSound = () => {
  const { playSound } = usePlaySoundEffect();

  return (
      <button key="Bell" onClick={() => playSound(Bell)}>
        Bell
      </button>
  );
}
```

## Comments from author

I'm a young solo developer aiming to build useful tools. Please reach out if you see room for improvement! This can range from more sounds, more capabilities with the hook, etc.