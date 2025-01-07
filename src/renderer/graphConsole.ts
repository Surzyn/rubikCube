import { IRubikCube } from "../types.ts";
import { IRenderer } from "./types.ts";

export class GraphConsoleRenderer implements IRenderer {
  render(cube: IRubikCube): void {
    const emptyRow = "             ";

    console.log("Current cube state:");

    console.log(
      emptyRow + this.formatRow(cube.getFace("Up")[0]),
      ...this.formatRowStyle(cube.getFace("Up")[0])
    );
    console.log(
      emptyRow + this.formatRow(cube.getFace("Up")[1]),
      ...this.formatRowStyle(cube.getFace("Up")[1])
    );
    console.log(
      emptyRow + this.formatRow(cube.getFace("Up")[2]),
      ...this.formatRowStyle(cube.getFace("Up")[2])
    );
    console.log("");

    console.log(
      this.formatRow(cube.getFace("Left")[0]) +
        " " +
        this.formatRow(cube.getFace("Front")[0]) +
        " " +
        this.formatRow(cube.getFace("Right")[0]) +
        " " +
        this.formatRow(cube.getFace("Bottom")[0]),

      ...this.formatRowStyle(cube.getFace("Left")[0]),
      ...this.formatRowStyle(cube.getFace("Front")[0]),
      ...this.formatRowStyle(cube.getFace("Right")[0]),
      ...this.formatRowStyle(cube.getFace("Bottom")[0])
    );

    console.log(
      this.formatRow(cube.getFace("Left")[1]) +
        " " +
        this.formatRow(cube.getFace("Front")[1]) +
        " " +
        this.formatRow(cube.getFace("Right")[1]) +
        " " +
        this.formatRow(cube.getFace("Bottom")[1]),

      ...this.formatRowStyle(cube.getFace("Left")[1]),
      ...this.formatRowStyle(cube.getFace("Front")[1]),
      ...this.formatRowStyle(cube.getFace("Right")[1]),
      ...this.formatRowStyle(cube.getFace("Bottom")[1])
    );

    console.log(
      this.formatRow(cube.getFace("Left")[2]) +
        " " +
        this.formatRow(cube.getFace("Front")[2]) +
        " " +
        this.formatRow(cube.getFace("Right")[2]) +
        " " +
        this.formatRow(cube.getFace("Bottom")[2]),

      ...this.formatRowStyle(cube.getFace("Left")[2]),
      ...this.formatRowStyle(cube.getFace("Front")[2]),
      ...this.formatRowStyle(cube.getFace("Right")[2]),
      ...this.formatRowStyle(cube.getFace("Bottom")[2])
    );

    console.log("");
    console.log(
      emptyRow + this.formatRow(cube.getFace("Down")[0]),
      ...this.formatRowStyle(cube.getFace("Down")[0])
    );
    console.log(
      emptyRow + this.formatRow(cube.getFace("Down")[1]),
      ...this.formatRowStyle(cube.getFace("Down")[1])
    );
    console.log(
      emptyRow + this.formatRow(cube.getFace("Down")[2]),
      ...this.formatRowStyle(cube.getFace("Down")[2])
    );
    console.log("");
  }

  private formatRow(row: string[]): string {
    return row.reduce((acc) => {
      return acc + "|%c  %c|";
    }, "");
  }

  private formatRowStyle(row: string[]): string[] {
    const styles = [];
    for (let i = 0; i < row.length; i++) {
      styles.push(`background-color: ${row[i]}`);
      styles.push("");
    }
    return styles;
  }
}
