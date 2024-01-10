import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.Presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

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
      alert(error.message);
    }
  };

  const onClickList = () => {};

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      ID: router.query.id,
    },
  });

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
    />
  );
}
