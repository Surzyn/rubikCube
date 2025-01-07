import { IRubikCube } from "../types.ts";
import { IRenderer } from "./types.ts";

export class TextConsoleRenderer implements IRenderer {
  render(cube: IRubikCube): void {
    const emptyRow = "\t\t\t ";

    console.log("Current cube state:");
    console.log(`${emptyRow}${this._formatRow(cube.getFace("Up")[0])}`);
    console.log(`${emptyRow}${this._formatRow(cube.getFace("Up")[1])}`);
    console.log(`${emptyRow}${this._formatRow(cube.getFace("Up")[2])}`);
    console.log(
      `${this._formatRow(cube.getFace("Left")[0])}\t ${this._formatRow(
        cube.getFace("Front")[0]
      )}\t ${this._formatRow(cube.getFace("Right")[0])}\t ${this._formatRow(
        cube.getFace("Bottom")[0]
      )}      `
    );
    console.log(
      `${this._formatRow(cube.getFace("Left")[1])}\t ${this._formatRow(
        cube.getFace("Front")[1]
      )}\t ${this._formatRow(cube.getFace("Right")[1])}\t ${this._formatRow(
        cube.getFace("Bottom")[1]
      )}      `
    );
    console.log(
      `${this._formatRow(cube.getFace("Left")[2])}\t ${this._formatRow(
        cube.getFace("Front")[2]
      )}\t ${this._formatRow(cube.getFace("Right")[2])}\t ${this._formatRow(
        cube.getFace("Bottom")[2]
      )}      `
    );
    console.log(`${emptyRow}${this._formatRow(cube.getFace("Down")[0])}`);
    console.log(`${emptyRow}${this._formatRow(cube.getFace("Down")[1])}`);
    console.log(`${emptyRow}${this._formatRow(cube.getFace("Down")[2])}`);
    console.log("");
  }

  private _formatRow(row: string[]): string {
    return row.join(" ");
  }
}
