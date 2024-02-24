import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./boardCommentList.Presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./boardCommentList.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardCommentList() {
  const router = useRouter();
  if (!router || typeof router.query.id !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.id,
    },
  });
  console.log(data);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력하세요.");
    try {
      if (!(event.target instanceof HTMLImageElement)) {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      console.log("댓글이 삭제되었습니다!");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
