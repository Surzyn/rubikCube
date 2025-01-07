import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test("Moving Right", () => {
  const cube = new RubikCube();
  cube.move("Right");
  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Right face should not be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Left face should not be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Front],
      [InitState.Up, InitState.Up, InitState.Front],
      [InitState.Up, InitState.Up, InitState.Front],
    ],
    "Up face right column should be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Down, InitState.Down, InitState.Bottom],
      [InitState.Down, InitState.Down, InitState.Bottom],
      [InitState.Down, InitState.Down, InitState.Bottom],
    ],
    "Down face right column should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Up, InitState.Bottom, InitState.Bottom],
      [InitState.Up, InitState.Bottom, InitState.Bottom],
      [InitState.Up, InitState.Bottom, InitState.Bottom],
    ],
    "Bottom face left column should be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Down],
      [InitState.Front, InitState.Front, InitState.Down],
      [InitState.Front, InitState.Front, InitState.Down],
    ],
    "Front face right column should be changed"
  );
});

Deno.test("Moving Right'", () => {
  const cube = new RubikCube();
  cube.move("Right'");
  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Right face should not be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Left face should not be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Bottom],
      [InitState.Up, InitState.Up, InitState.Bottom],
      [InitState.Up, InitState.Up, InitState.Bottom],
    ],
    "Up face right column should be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Down, InitState.Down, InitState.Front],
      [InitState.Down, InitState.Down, InitState.Front],
      [InitState.Down, InitState.Down, InitState.Front],
    ],
    "Down face right column should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Down, InitState.Bottom, InitState.Bottom],
      [InitState.Down, InitState.Bottom, InitState.Bottom],
      [InitState.Down, InitState.Bottom, InitState.Bottom],
    ],
    "Bottom face left column should be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Up],
      [InitState.Front, InitState.Front, InitState.Up],
      [InitState.Front, InitState.Front, InitState.Up],
    ],
    "Front face right column should be changed"
  );
});
