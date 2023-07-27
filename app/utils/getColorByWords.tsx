export type TechnoColorType =
  | "Typescript"
  | "React"
  | "Javascript"
  | "HTML"
  | "CSS"
  | "NextJs"
  | "NodeJS"
  | "Redux"
  | "RTKQuery"
  | "Tailwind"
  | "Firebase"
  | "API";

export const getColorByWord = (word: TechnoColorType) => {
  const technoColor = {
    Typescript: "#235A97",
    React: "#61dafb",
    NodeJS: "#276749",
    NextJs: "#000",
    Javascript: "#fecc00",
    HTML: "#ee5f25",
    CSS: "#08a7e2",
    Redux: "#7D63AA",
    RTKQuery: "6f4ab2",
    Tailwind: "#38BDF8",
    Firebase: "#FBB202",
    API: "#000",
  };

  return (
    <span
      className="font-bold"
      style={{ color: technoColor[word] || "#141213" }}
    >
      {word}
    </span>
  );
};
