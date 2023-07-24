export type navbarDataType = {
  name: string;
  tagId: string;
  itemNumber: number;
  id: number;
};

export const navbarData: navbarDataType[] = [
  {
    name: "À propos",
    tagId: "#about",
    itemNumber: 0o1,
    id: 1,
  },
  {
    name: "Projets",
    tagId: "#projets",
    itemNumber: 0o2,
    id: 2,
  },
  {
    name: "Contact",
    tagId: "#contact",
    itemNumber: 0o3,
    id: 3,
  },
];
