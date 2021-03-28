// 最大 ボタンx10, 追放・キルx8
export const RANGE = 18;

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
  | "Lime";
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
};

export type EventType = "Dead";
export const eventTypes: Record<EventType, EventType> = {
  Dead: "Dead",
};

export type JsonFormat = {
  members: Array<{
    color: ColorName;
    name: string;
  }>;
};
