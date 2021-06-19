// 最大 追放・キルx13
export const RANGE = 13;
export const MEMBER_MAX = 15;

import RedImage from "./assets/image/Red.png";
import BlueImage from "./assets/image/Blue.png";
import GreenImage from "./assets/image/Green.png";
import PinkImage from "./assets/image/Pink.png";
import OrangeImage from "./assets/image/Orange.png";
import YellowImage from "./assets/image/Yellow.png";
import BlackImage from "./assets/image/Black.png";
import WhiteImage from "./assets/image/White.png";
import PurpleImage from "./assets/image/Purple.png";
import BrownImage from "./assets/image/Brown.png";
import CyanImage from "./assets/image/Cyan.png";
import LimeImage from "./assets/image/Lime.png";
import RoseImage from "./assets/image/Rose.png";
import GrayImage from "./assets/image/Gray.png";
import TanImage from "./assets/image/Tan.png";
import BananaImage from "./assets/image/Banana.png";
import CoralImage from "./assets/image/Coral.png";
import MaroonImage from "./assets/image/Maroon.png";
export type ColorName =
  | "Red"
  | "Blue"
  | "Green"
  | "Pink"
  | "Orange"
  | "Yellow"
  | "Black"
  | "White"
  | "Purple"
  | "Brown"
  | "Cyan"
  | "Lime"
  | "Maroon"
  | "Rose"
  | "Banana"
  | "Gray"
  | "Tan"
  | "Coral";
export type Color = {
  name: ColorName;
  image: string;
};
export const colors: Record<ColorName, Color> = {
  Red: {
    name: "Red",
    image: RedImage,
  },
  Blue: {
    name: "Blue",
    image: BlueImage,
  },
  Green: {
    name: "Green",
    image: GreenImage,
  },
  Pink: {
    name: "Pink",
    image: PinkImage,
  },
  Orange: {
    name: "Orange",
    image: OrangeImage,
  },
  Yellow: {
    name: "Yellow",
    image: YellowImage,
  },
  Black: {
    name: "Black",
    image: BlackImage,
  },
  White: {
    name: "White",
    image: WhiteImage,
  },
  Purple: {
    name: "Purple",
    image: PurpleImage,
  },
  Brown: {
    name: "Brown",
    image: BrownImage,
  },
  Cyan: {
    name: "Cyan",
    image: CyanImage,
  },
  Lime: {
    name: "Lime",
    image: LimeImage,
  },
  Maroon: {
    name: "Maroon",
    image: MaroonImage,
  },
  Rose: {
    name: "Rose",
    image: RoseImage,
  },
  Banana: {
    name: "Banana",
    image: BananaImage,
  },
  Gray: {
    name: "Gray",
    image: GrayImage,
  },
  Tan: {
    name: "Tan",
    image: TanImage,
  },
  Coral: {
    name: "Coral",
    image: CoralImage,
  },
};

export type JsonFormat = {
  members: Array<{
    color: ColorName;
    name: string;
  }>;
};
