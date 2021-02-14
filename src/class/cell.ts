export default class Cell {
  value: string | null = null;

  UpperCell: string | null = null;

  UpperRightCell: string | null = null;

  RightCell: string | null = null;

  LowerRigtyCell: string | null = null;

  LowerCell: string | null = null;

  LowerLeftCell: string | null = null;

  LeftCell: string | null = null;

  UpperLeftCell: string | null = null;

  constructor(value: string | null = null) {
    this.value = value;
  }
}
