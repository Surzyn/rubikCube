import { Face } from "./types.ts";

export type Color = "White" | "Red" | "Yellow" | "Orange" | "Green" | "Blue";

export const InitState: Record<Face, Color> = {
  Front: "Green",
  Right: "Red",
  Up: "White",
  Bottom: "Blue",
  Left: "Orange",
  Down: "Yellow",
};
