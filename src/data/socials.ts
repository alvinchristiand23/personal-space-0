import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";

import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MAIL_URL, WHATSAPP_URL } from "@/constants";
import { SocialItem } from "@/types/SocialItem";

export const socials: SocialItem[] = [
  {
    name: "Whatsapp",
    url: WHATSAPP_URL,
    icon: IconBrandWhatsapp,
  },
  {
    name: "Email",
    url: MAIL_URL,
    icon: IconMail,
  },
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
    icon: IconBrandLinkedin,
  },
  {
    name: "Github",
    url: GITHUB_URL,
    icon: IconBrandGithub,
  },
  {
    name: "Instagram",
    url: INSTAGRAM_URL,
    icon: IconBrandInstagram,
  },
];
