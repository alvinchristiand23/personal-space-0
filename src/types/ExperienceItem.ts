import { StaticImageData } from "next/image";

export interface ExperienceItem {
  companyLogo: StaticImageData | string;
  companyName: string;
  companyLink: string;
  position: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  jobDescription: string[];
}
