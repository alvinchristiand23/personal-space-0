export type TechLevel = "Beg" | "Int" | "Adv";

export interface TechStackItem {
  name: string;
  logo: string;
  color: string;
  level: TechLevel;
}
