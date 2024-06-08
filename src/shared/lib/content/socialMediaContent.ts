import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faX } from "@fortawesome/free-solid-svg-icons";

export interface ISocialMediaProps {
  icon: IconDefinition;
  href: string;
  aria_label: string;
}

export const socialMediaContent: ISocialMediaProps[] = [
  {
    icon: faTwitter,
    href: "https://x.com/ferlabikes?lang=en&mx=2",
    aria_label: "twitter",
  },
  {
    icon: faPinterest,
    href: "https://www.pinterest.com/ferlabikespinterest/",
    aria_label: "pinterest",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/FerlaBikes/",
    aria_label: "facebook",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/ferlabikes/",
    aria_label: "instagram",
  },

  {
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCZa63PA8Ls17M4v3NebRqLQ",
    aria_label: "youtube",
  },
];
