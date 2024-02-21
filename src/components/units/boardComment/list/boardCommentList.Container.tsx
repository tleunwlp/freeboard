import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./boardCommentList.Presenter";
import { FETCH_BOARD_COMMENTS } from "./boardCommentList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardCommentList() {
  const router = useRouter();
  if (!router || router.query.id !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: router.query.id,
    },
  });
  console.log(data);

  return <BoardCommentListUI data={data} />;
}
