type directionType = "top" | "bottom";
export const scrollToDirection = (direction: directionType) => {
  if (direction === "top") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
