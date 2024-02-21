import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToResister: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
