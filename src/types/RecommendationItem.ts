import { StaticImageData } from "next/image";

export interface RecommendationItem {
  name: string;
  position: string;
  companyName: string;
  companyLogo: StaticImageData | string;
  message: string;
}
