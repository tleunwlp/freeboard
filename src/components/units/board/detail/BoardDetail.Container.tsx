import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.Presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  if (!router || typeof router.query.id !== "string") return <></>;

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.id,
        },
      });
      console.log("게시판 성공적으로 삭제!");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickList = () => {
    router.push(`/boards`);
  };

  const onClickEdit = () => {
    router.push(`/boards/new-moved/${router.query.id}/edit`);
  };

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.id,
      },
    }
  );

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    />
  );
}
