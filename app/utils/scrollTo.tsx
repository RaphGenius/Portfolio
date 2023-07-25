import Link from "next/link";
import { tagIdType } from "../components/navbar/data";

type directionType = "top" | "bottom";
export const scrollToDirection = (direction: directionType) => {
  if (direction === "top") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
