import { ChangeEvent, MouseEvent, ChangeEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  content?: string;
}

export interface IBoardWriteUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickResister: () => void;
  onClickEdit: () => void;
  nameError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IResisterBtnProps {
  isActive: boolean;
}
