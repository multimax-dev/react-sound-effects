export const Boom = async () => {
  const module = await import("./sounds/boom.mp3");
  return {
    name: "boom",
    file: module.default,
    tags: ["celebration", "percussion", "drum", "instrument"],
  };
};

export const Bell = async () => {
  const module = await import("./sounds/bell.mp3");
  return {
    name: "bell",
    file: module.default,
    tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
  };
};

export const DrumRoll = async () => {
  const module = await import("./sounds/drum-roll.mp3");
  return {
    name: "drum-roll",
    file: module.default,
    tags: ["celebration", "percussion", "drum", "instrument"],
  };
};

export const MouseClick = async () => {
  const module = await import("./sounds/mouse-click.mp3");
  return {
    name: "mouse-click",
    file: module.default,
    tags: ["thocky", "computer", "typing"],
  };
};

export const Pop = async () => {
  const module = await import("./sounds/pop.mp3");
  return {
    name: "pop",
    file: module.default,
  };
};

export const Ping = async () => {
  const module = await import("./sounds/ping.mp3");
  return {
    name: "ping",
    file: module.default,
  };
};

export const Typing = async () => {
  const module = await import("./sounds/typing.mp3");
  return {
    name: "typing",
    file: module.default,
    tags: ["thocky", "keyboard", "computer", "typing"],
  };
};

export const SnareDrum = async () => {
  const module = await import("./sounds/snare-drum.mp3");
  return {
    name: "snare-drum",
    file: module.default,
    tags: ["percussion", "instrument", "drum"],
  };
};

export const ClapsSolo = async () => {
  const module = await import("./sounds/claps-solo.mp3");
  return {
    name: "claps-solo",
    file: module.default,
    tags: ["human", "clap", "celebration", "funny"],
  };
};

export const ChildrenYay = async () => {
  const module = await import("./sounds/children-yay.mp3");
  return {
    name: "children-yay",
    file: module.default,
    tags: ["human", "cheer", "celebration"],
  };
};
