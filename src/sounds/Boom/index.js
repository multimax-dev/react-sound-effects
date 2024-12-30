export const Boom = async () => {
  const module = await import("./boom.mp3");
  return {
    name: "boom",
    file: module.default,
    tags: ["celebration", "percussion", "drum", "instrument"],
  };
};
