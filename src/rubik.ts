import { Color, InitState } from "./config.ts";
import { Face, IRubikCube, Move } from "./types.ts";
import { DeepClone } from "./utilities.ts";

type FaceState = {
  state: Color[][];
  rotation: (clockwise: boolean) => void;
};

export class RubikCube implements IRubikCube {
  private gridSize = 3;
  private cube: Record<Face, FaceState>;

  constructor() {
    this.cube = this.getInitState();
  }

  public reset(): void {
    this.cube = this.getInitState();
  }

  public getFace(face: Face): string[][] {
    return this.cube[face].state;
  }

  public move(move: Move): void {
    const face = move.replace("'", "") as Face;
    const clockwise = move.slice(-1) === "'" ? true : false;
    this._rotateFaceState(face, clockwise);
  }

  private _rotateFaceState(face: Face, clockwise: boolean): void {
    const { rotation, state } = this.cube[face];
    console.log(`rotation: ${face}, clockwise: ${clockwise}`);
    rotation(clockwise);
    this.rotateOwnAxis(state, clockwise);
  }

  private rotateRightFace(clockwise: boolean): void {
    const oldState = DeepClone(this.cube);
    if (clockwise) {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Down.state[i][2] = oldState.Front.state[i][2];
        this.cube.Front.state[i][2] = oldState.Up.state[i][2];
        this.cube.Up.state[this.gridSize - 1 - i][2] =
          oldState.Bottom.state[i][2];
        this.cube.Bottom.state[this.gridSize - 1 - i][0] =
          oldState.Down.state[i][2];
      }
    } else {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Down.state[this.gridSize - 1 - i][2] =
          oldState.Bottom.state[i][0];
        this.cube.Bottom.state[this.gridSize - 1 - i][0] =
          oldState.Up.state[i][2];
        this.cube.Up.state[i][2] = oldState.Front.state[i][2];
        this.cube.Front.state[i][2] = oldState.Down.state[i][2];
      }
    }
  }

  private rotateFrontFace(clockwise: boolean): void {
    const oldState = DeepClone(this.cube);

    if (clockwise) {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[this.gridSize - 1 - i][2] =
          oldState.Up.state[2][i];
        this.cube.Up.state[2][i] = oldState.Right.state[i][0];
        this.cube.Right.state[this.gridSize - 1 - i][0] =
          oldState.Down.state[0][i];
        this.cube.Down.state[0][i] = oldState.Left.state[i][2];
      }
    } else {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[i][2] = oldState.Down.state[0][i];
        this.cube.Down.state[0][this.gridSize - 1 - i] =
          oldState.Right.state[i][0];
        this.cube.Right.state[i][0] = oldState.Up.state[2][i];
        this.cube.Up.state[2][this.gridSize - 1 - i] =
          oldState.Left.state[i][2];
      }
    }
  }

  private rotateUpFace(clockwise: boolean): void {
    const oldState = DeepClone(this.cube);

    if (clockwise) {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[0][i] = oldState.Bottom.state[0][i];
        this.cube.Bottom.state[0][i] = oldState.Right.state[0][i];
        this.cube.Right.state[0][i] = oldState.Front.state[0][i];
        this.cube.Front.state[0][i] = oldState.Left.state[0][i];
      }
    } else {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[0][i] = oldState.Front.state[0][i];
        this.cube.Front.state[0][i] = oldState.Right.state[0][i];
        this.cube.Right.state[0][i] = oldState.Bottom.state[0][i];
        this.cube.Bottom.state[0][i] = oldState.Left.state[0][i];
      }
    }
  }

  private rotateBottomFace(clockwise: boolean): void {
    const oldState = DeepClone(this.cube);

    if (clockwise) {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[i][0] = oldState.Down.state[2][i];
        this.cube.Down.state[2][this.gridSize - 1 - i] =
          oldState.Right.state[i][2];
        this.cube.Right.state[i][2] = oldState.Up.state[0][i];
        this.cube.Up.state[0][this.gridSize - 1 - i] =
          oldState.Left.state[i][0];
      }
    } else {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[this.gridSize - 1 - i][0] =
          oldState.Up.state[0][i];
        this.cube.Up.state[0][i] = oldState.Right.state[i][2];
        this.cube.Right.state[this.gridSize - 1 - i][2] =
          oldState.Down.state[2][i];
        this.cube.Down.state[2][i] = oldState.Left.state[i][0];
      }
    }
  }

  private rotateLeftFace(clockwise: boolean): void {
    const oldState = DeepClone(this.cube);

    if (clockwise) {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Up.state[i][0] = oldState.Front.state[i][0];
        this.cube.Front.state[i][0] = oldState.Down.state[i][0];
        this.cube.Down.state[this.gridSize - 1 - i][0] =
          oldState.Bottom.state[i][2];
        this.cube.Bottom.state[this.gridSize - 1 - i][2] =
          oldState.Up.state[i][0];
      }
    } else {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Up.state[this.gridSize - 1 - i][0] =
          oldState.Bottom.state[i][2];
        this.cube.Bottom.state[this.gridSize - 1 - i][2] =
          oldState.Down.state[i][0];
        this.cube.Down.state[i][0] = oldState.Front.state[i][0];
        this.cube.Front.state[i][0] = oldState.Up.state[i][0];
      }
    }
  }

  private rotateDownFace(clockwise: boolean): void {
    const oldState = DeepClone(this.cube);

    if (clockwise) {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[2][i] = oldState.Front.state[2][i];
        this.cube.Front.state[2][i] = oldState.Right.state[2][i];
        this.cube.Right.state[2][i] = oldState.Bottom.state[2][i];
        this.cube.Bottom.state[2][i] = oldState.Left.state[2][i];
      }
    } else {
      for (let i = 0; i < this.gridSize; i++) {
        this.cube.Left.state[2][i] = oldState.Bottom.state[2][i];
        this.cube.Bottom.state[2][i] = oldState.Right.state[2][i];
        this.cube.Right.state[2][i] = oldState.Front.state[2][i];
        this.cube.Front.state[2][i] = oldState.Left.state[2][i];
      }
    }
  }

  private rotateOwnAxis(state: Color[][], clockwise: boolean): void {
    const prevState = DeepClone(state);
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        if (clockwise) {
          state[i][j] = prevState[j][this.gridSize - 1 - i];
        } else {
          state[i][j] = prevState[this.gridSize - 1 - j][i];
        }
      }
    }
  }

  private getInitState(): Record<Face, FaceState> {
    return {
      Up: {
        state: this.createFace(InitState.Up),
        rotation: this.rotateUpFace.bind(this),
      },
      Right: {
        state: this.createFace(InitState.Right),
        rotation: this.rotateRightFace.bind(this),
      },
      Bottom: {
        state: this.createFace(InitState.Bottom),
        rotation: this.rotateBottomFace.bind(this),
      },
      Left: {
        state: this.createFace(InitState.Left),
        rotation: this.rotateLeftFace.bind(this),
      },
      Front: {
        state: this.createFace(InitState.Front),
        rotation: this.rotateFrontFace.bind(this),
      },
      Down: {
        state: this.createFace(InitState.Down),
        rotation: this.rotateDownFace.bind(this),
      },
    };
  }

  private createFace(color: Color): Color[][] {
    return Array.from({ length: this.gridSize }, () =>
      Array(this.gridSize).fill(color)
    );
  }
}
