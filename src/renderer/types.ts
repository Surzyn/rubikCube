import { IRubikCube } from "../types.ts";

export interface IRenderer {
  render(cube: IRubikCube): void;
}
