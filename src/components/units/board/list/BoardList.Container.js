import BoardListUI from "./BoardList.Presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  return <BoardListUI data={data} />;
}
