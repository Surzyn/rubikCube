import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test("Moving Left", () => {
  const cube = new RubikCube();
  cube.move("Left");
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
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Right face should not be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Bottom, InitState.Up, InitState.Up],
      [InitState.Bottom, InitState.Up, InitState.Up],
      [InitState.Bottom, InitState.Up, InitState.Up],
    ],
    "Up face left column should be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Front, InitState.Down, InitState.Down],
      [InitState.Front, InitState.Down, InitState.Down],
      [InitState.Front, InitState.Down, InitState.Down],
    ],
    "Down face left column should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Down],
      [InitState.Bottom, InitState.Bottom, InitState.Down],
      [InitState.Bottom, InitState.Bottom, InitState.Down],
    ],
    "Bottom face right column should be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Up, InitState.Front, InitState.Front],
      [InitState.Up, InitState.Front, InitState.Front],
      [InitState.Up, InitState.Front, InitState.Front],
    ],
    "Front face left column should be changed"
  );
});

Deno.test("Moving Left'", () => {
  const cube = new RubikCube();
  cube.move("Left'");
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
    cube.getFace("Right"),
    [
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
      [InitState.Right, InitState.Right, InitState.Right],
    ],
    "Right face should not be changed"
  );

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Front, InitState.Up, InitState.Up],
      [InitState.Front, InitState.Up, InitState.Up],
      [InitState.Front, InitState.Up, InitState.Up],
    ],
    "Up face left column should be changed"
  );

  assertEquals(
    cube.getFace("Down"),
    [
      [InitState.Bottom, InitState.Down, InitState.Down],
      [InitState.Bottom, InitState.Down, InitState.Down],
      [InitState.Bottom, InitState.Down, InitState.Down],
    ],
    "Down face left column should be changed"
  );

  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Bottom, InitState.Bottom, InitState.Up],
      [InitState.Bottom, InitState.Bottom, InitState.Up],
      [InitState.Bottom, InitState.Bottom, InitState.Up],
    ],
    "Bottom face right column should be changed"
  );

  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Down, InitState.Front, InitState.Front],
      [InitState.Down, InitState.Front, InitState.Front],
      [InitState.Down, InitState.Front, InitState.Front],
    ],
    "Front face left column should be changed"
  );
});
