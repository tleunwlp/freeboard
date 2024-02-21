import BoardCommentWriteUI from "./boardCommentWrite.Presenter";
import { CREATE_BOARD_COMMENT } from "./boardCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
export default function BoardCommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0.0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickStar1 = () => {
    setRating(1.0);
  };
  const onClickStar2 = () => {
    setRating(2.0);
  };
  const onClickStar3 = () => {
    setRating(3.0);
  };
  const onClickStar4 = () => {
    setRating(4.0);
  };
  const onClickStar5 = () => {
    setRating(5.0);
  };

  const onClickCommentReg = async () => {
    if (!router || router.query.id !== "string") return <></>;
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.id,
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onClickCommentReg={onClickCommentReg}
      onChangeContents={onChangeContents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onClickStar1={onClickStar1}
      onClickStar2={onClickStar2}
      onClickStar3={onClickStar3}
      onClickStar4={onClickStar4}
      onClickStar5={onClickStar5}
    />
  );
}
