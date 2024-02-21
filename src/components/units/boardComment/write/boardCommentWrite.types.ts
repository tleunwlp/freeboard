import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onClickCommentReg: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickStar1: () => void;
  onClickStar2: () => void;
  onClickStar3: () => void;
  onClickStar4: () => void;
  onClickStar5: () => void;
}
