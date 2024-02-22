import BoardCommentList from "../../../../src/components/units/boardComment/list/boardCommentList.Container";
import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.Container";
import BoardCommentWrite from "../../../../src/components/units/boardComment/write/boardCommentWrite.Container";

export default function DetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
