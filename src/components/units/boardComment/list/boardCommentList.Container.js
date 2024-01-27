import BoardCommentListUI from "./boardCommentList.Presenter";
import { FETCH_BOARD_COMMENTS } from "./boardCommentList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardCommentList() {
  const router = useRouter();

  try {
    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
      variables: {
        page: 1,
        boardId: router.query.id,
      },
    });
    console.log(data);
  } catch (error) {
    alert(error.message);
  }

  return <BoardCommentListUI data={data} />;
}
