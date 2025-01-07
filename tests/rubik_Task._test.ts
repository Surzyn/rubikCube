import { assertEquals } from "jsr:@std/assert";
import { RubikCube } from "../src/rubik.ts";
import { InitState } from "../src/config.ts";

Deno.test("Execute task", () => {
  const cube = new RubikCube();
  cube.move("Front");
  cube.move("Right'");
  cube.move("Up");
  cube.move("Bottom");
  cube.move("Left");
  cube.move("Down'");

  assertEquals(
    cube.getFace("Up"),
    [
      [InitState.Down, InitState.Right, InitState.Up],
      [InitState.Left, InitState.Up, InitState.Up],
      [InitState.Left, InitState.Bottom, InitState.Bottom],
    ],
    "Up face is not correct"
  );

  assertEquals(
    cube.getFace("Left"),
    [
      [InitState.Left, InitState.Up, InitState.Up],
      [InitState.Left, InitState.Left, InitState.Front],
      [InitState.Bottom, InitState.Front, InitState.Left],
    ],
    "Left face is not correct"
  );
  assertEquals(
    cube.getFace("Front"),
    [
      [InitState.Bottom, InitState.Right, InitState.Right],
      [InitState.Left, InitState.Front, InitState.Up],
      [InitState.Up, InitState.Up, InitState.Down],
    ],
    "Front face is not correct"
  );

  assertEquals(
    cube.getFace("Right"),
    [
      [InitState.Down, InitState.Bottom, InitState.Front],
      [InitState.Right, InitState.Right, InitState.Down],
      [InitState.Bottom, InitState.Bottom, InitState.Right],
    ],
    "Right face is not correct"
  );
  assertEquals(
    cube.getFace("Bottom"),
    [
      [InitState.Right, InitState.Down, InitState.Front],
      [InitState.Bottom, InitState.Bottom, InitState.Down],
      [InitState.Down, InitState.Down, InitState.Up],
    ],
    "Bottom face is not correct"
  ),
    assertEquals(
      cube.getFace("Down"),
      [
        [InitState.Front, InitState.Front, InitState.Left],
        [InitState.Right, InitState.Down, InitState.Left],
        [InitState.Right, InitState.Front, InitState.Front],
      ],
      "Down face is not correct"
    );
});
