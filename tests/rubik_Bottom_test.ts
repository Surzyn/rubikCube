import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test("Moving Bottom", () => {
  const cube = new RubikCube();
  cube.move("Bottom");
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
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Front face should not be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Down face bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Down],
      [InitState.Right, InitState.Right, InitState.Down],
      [InitState.Right, InitState.Right, InitState.Down],
    ],
    "Right right row should be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up up row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Up, InitState.Left, InitState.Left],
      [InitState.Up, InitState.Left, InitState.Left],
      [InitState.Up, InitState.Left, InitState.Left],
    ],
    "Left right row should be changed"
  );
});

Deno.test("Moving Bottom'", () => {
  const cube = new RubikCube();
  cube.move("Bottom'");
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
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Front face should not be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Down face bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Up],
      [InitState.Right, InitState.Right, InitState.Up],
      [InitState.Right, InitState.Right, InitState.Up],
    ],
    "Right right row should be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up up row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Down, InitState.Left, InitState.Left],
      [InitState.Down, InitState.Left, InitState.Left],
      [InitState.Down, InitState.Left, InitState.Left],
    ],
    "Left left row should be changed"
  );
});

Deno.test("Moving Bottom - index swap anticlockwise", () => {
  const cube = new RubikCube();
  cube.move("Up");
  cube.move("Bottom'");

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Left, InitState.Left, InitState.Front],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up face should be changed"
  );
});

Deno.test("Moving Bottom - index swap clockwise", () => {
  const cube = new RubikCube();
  cube.move("Up");
  cube.move("Bottom");

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Bottom, InitState.Right, InitState.Right],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up face should be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Down],
      [InitState.Front, InitState.Left, InitState.Left],
    ],
    "Down face should be changed"
  );
});
