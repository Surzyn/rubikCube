import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test(
  "Testing U R' B B B L' L' F D' B' U' R F' L U B F L' D' movements",
  () => {
    const cube = new RubikCube();
    cube.move("Up");
    cube.move("Right'");
    cube.move("Bottom");
    cube.move("Bottom");
    cube.move("Bottom");
    cube.move("Left'");
    cube.move("Left'");
    cube.move("Front");
    cube.move("Down'");
    cube.move("Bottom'");
    cube.move("Up'");
    cube.move("Right");
    cube.move("Front'");
    cube.move("Left");
    cube.move("Up");
    cube.move("Bottom");
    cube.move("Front");
    cube.move("Left'");
    cube.move("Down'");

    assertEquals(
      cube.getFace("Front"),
      [
        [InitState.Bottom, InitState.Left, InitState.Left],
        [InitState.Left, InitState.Front, InitState.Up],
        [InitState.Left, InitState.Left, InitState.Bottom],
      ],
      "Front face should be changed"
    );

    assertEquals(
      cube.getFace("Bottom"),
      [
        [InitState.Front, InitState.Down, InitState.Bottom],
        [InitState.Left, InitState.Bottom, InitState.Down],
        [InitState.Front, InitState.Front, InitState.Down],
      ],
      "Bottom face should be changed"
    );

    assertEquals(
      cube.getFace("Up"),
      [
        [InitState.Down, InitState.Bottom, InitState.Down],
        [InitState.Front, InitState.Up, InitState.Bottom],
        [InitState.Left, InitState.Front, InitState.Up],
      ],
      "Up face should be changed"
    );

    assertEquals(
      cube.getFace("Right"),
      [
        [InitState.Front, InitState.Right, InitState.Right],
        [InitState.Right, InitState.Right, InitState.Up],
        [InitState.Right, InitState.Bottom, InitState.Right],
      ],
      "Right face should be changed"
    );

    assertEquals(
      cube.getFace("Down"),
      [
        [InitState.Down, InitState.Bottom, InitState.Up],
        [InitState.Front, InitState.Down, InitState.Up],
        [InitState.Front, InitState.Up, InitState.Up],
      ],
      "Down face should be changed"
    );

    assertEquals(
      cube.getFace("Left"),
      [
        [InitState.Right, InitState.Down, InitState.Up],
        [InitState.Right, InitState.Left, InitState.Down],
        [InitState.Left, InitState.Right, InitState.Bottom],
      ],
      "Left face should be changed"
    );
  }
);
