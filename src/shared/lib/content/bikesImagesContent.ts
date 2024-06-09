import { StaticImageData } from "next/image";

import bike_01 from "@assets/webp/mob/bike_01_mob.webp";
import bike_02 from "@assets/webp/mob/bike_02_mob.webp";
import bike_03 from "@assets/webp/mob/bike_03_mob.webp";
import bike_04 from "@assets/webp/mob/bike_04_mob.webp";

export interface IBikes {
  image: StaticImageData;
}

export const bikes: IBikes[] = [
  { image: bike_01 },
  { image: bike_02 },
  { image: bike_03 },
  { image: bike_04 },
];
