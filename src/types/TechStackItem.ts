export type TechCategory = "PL" | "FE" | "BE" | "DB" | "API" | "PM" | "Tools";

export type TechLevel = "Beg" | "Int" | "Adv";

export interface TechStackItem {
  name: string;
  logo: string;
  color: string;
  tags: [TechCategory, TechLevel];
}
