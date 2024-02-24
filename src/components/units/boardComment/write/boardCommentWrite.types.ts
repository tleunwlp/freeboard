import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onClickCommentReg: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
