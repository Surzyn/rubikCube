import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test("Moving Front", () => {
  const cube = new RubikCube();
  cube.move("Front");
  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Front face should not be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
    ],
    "Bottom face should not be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Up face bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Up, InitState.Right, InitState.Right],
      [InitState.Up, InitState.Right, InitState.Right],
      [InitState.Up, InitState.Right, InitState.Right],
    ],
    "Right left column should be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
    ],
    "Down top row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Left, InitState.Left, InitState.Down],
      [InitState.Left, InitState.Left, InitState.Down],
      [InitState.Left, InitState.Left, InitState.Down],
    ],
    "Left right column should be changed"
  );
});

Deno.test("Moving Front'", () => {
  const cube = new RubikCube();
  cube.move("Front'");
  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Front face should not be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
    ],
    "Bottom face should not be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Up face bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Down, InitState.Right, InitState.Right],
      [InitState.Down, InitState.Right, InitState.Right],
      [InitState.Down, InitState.Right, InitState.Right],
    ],
    "Right left column should be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
    ],
    "Down top row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Left, InitState.Left, InitState.Up],
      [InitState.Left, InitState.Left, InitState.Up],
      [InitState.Left, InitState.Left, InitState.Up],
    ],
    "Left right column should be changed"
  );
});
