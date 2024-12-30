export const Bell = async () => {
  const module = await import("./bell.mp3");
  return {
    name: "bell",
    file: module.default,
    tags: ["soft", "percussion", "tone", "instrument", "bell", "notification"],
  };
};