import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test("Moving Down", () => {
  const cube = new RubikCube();
  cube.move("Down");
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
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up face should not be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Front face bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Right face right column should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Bottom face bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
    ],
    "Left face bottom column should be changed"
  );
});

Deno.test("Moving Down'", () => {
  const cube = new RubikCube();
  cube.move("Down'");
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
    cube.getFace("Up"),
    [
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Up],
    ],
    "Up face should not be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Front, InitState.Front, InitState.Front],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Front face bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
    ],
    "Right face bottom column should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Bottom, InitState.Bottom, InitState.Bottom],
      [InitState.Left, InitState.Left, InitState.Left],
    ],
    "Bottom bottom row should be changed"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Left, InitState.Left, InitState.Left],
      [InitState.Front, InitState.Front, InitState.Front],
    ],
    "Left face bottom column should be changed"
  );
});
