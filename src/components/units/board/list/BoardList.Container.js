import BoardListUI from "./BoardList.Presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickMoveToResister = () => {
    router.push(`/boards/new`);
  };

  const onClickMoveToDetail = (event) => {
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
