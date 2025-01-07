export type Face = "Front" | "Right" | "Up" | "Bottom" | "Left" | "Down";
export type Move = `${Face}${"" | "'"}`;

export interface IRubikCube {
  getFace(face: Face): string[][];
  move(move: Move): void;
}
