import { RubikCube } from "./rubik.ts";
import { GraphConsoleRenderer, TextConsoleRenderer } from "./renderer/index.ts";

(function main() {
  const cube = new RubikCube();
  const renderer = new GraphConsoleRenderer();

  while (true) {
    renderer.render(cube);
    const move = prompt(
      "Enter move: Front | Front' | Right | Right' ... Down' (exit to quit or reset): "
    );
    switch (move) {
      case "exit":
        Deno.exit(0);
        break;
      case "reset":
        cube.reset();
        break;
      case "Front":
      case "Front'":
      case "Right":
      case "Right'":
      case "Up":
      case "Up'":
      case "Bottom":
      case "Bottom'":
      case "Left":
      case "Left'":
      case "Down":
      case "Down'":
        cube.move(move);
        break;
      default:
        console.log(`Invalid move: ${move}. Please try again!`);
        break;
    }
  }
})();
