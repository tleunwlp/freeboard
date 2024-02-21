import BoardListUI from "./BoardList.Presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  console.log(data?.fetchBoards);

  const onClickMoveToResister = () => {
    router.push(`/boards/new`);
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/boards/new-moved/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToResister={onClickMoveToResister}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
