import { StaticImageData } from "next/image";

import deutsche_bank from "@assets/clients/deutsche_bank.svg";
import verizon from "@assets/clients/verizon.svg";
import puma from "@assets/clients/puma.svg";
import mcCafe from "@assets/clients/mcCAFE.svg";
import ford from "@assets/clients/ford.svg";
import bmw from "@assets/clients/bmw.svg";

export interface IClients {
  image: StaticImageData;
  alt: string;
}

export const clientContent: IClients[] = [
  { image: deutsche_bank, alt: "Deutsche Bank" },
  { image: verizon, alt: "Verizon" },
  { image: puma, alt: "Puma" },
  { image: mcCafe, alt: "mcCafe" },
  { image: ford, alt: "Ford" },
  { image: bmw, alt: "BMW" },
];
