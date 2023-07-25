import { navbarDataType, tagIdType } from "../components/navbar/data";

export type navbarContextType = {
  tagIdSelected: tagIdType | null;

  switchTagid: (tagId: tagIdType | null) => void;
};
