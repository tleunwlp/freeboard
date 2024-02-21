import BoardWrite from "../../../../../src/components/units/board/write/BoardWrite.Container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  if (!router || typeof router.query.id !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.id,
      },
    }
  );

  return <BoardWrite isEdit={true} data={data} />;
}
