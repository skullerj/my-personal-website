import type { Site, SocialObjects } from "./types";
import profile from "./assets/profile.json";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Juan Rosero",
  desc: profile.professionalSummary,
  title: "Juan Rosero",
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/skullerj",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-rosero-749547156/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:juan@rosero.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
