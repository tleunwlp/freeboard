import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($ID: ID!) {
    fetchBoard(boardId: $ID) {
      writer
      title
      contents
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
