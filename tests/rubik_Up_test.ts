import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test("Moving Up", () => {
  const cube = new RubikCube();
  cube.move("Up");
  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up face should not be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
    ],
    "Down face should not be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Front face top row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Right top row should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
    ],
    "Bottom top row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Left top row should be changed"
  );
});

Deno.test("Moving Up'", () => {
  const cube = new RubikCube();
  cube.move("Up'");
  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up face should not be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
    ],
    "Down face should not be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Front face top row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Right top row should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
    ],
    "Bottom top row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Left top row should be changed"
  );
});
