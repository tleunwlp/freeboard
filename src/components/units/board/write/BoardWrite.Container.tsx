import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.Presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import { IUpdateBoardInput } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
    if (event.target.value && password && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (name && event.target.value && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (name && password && event.target.value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
    if (name && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onClickResister = async () => {
    if (name === "") {
      setNameError("이름을 작성해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (content === "") {
      setContentError("내용을 입력해주세요.");
    }
    if (name && password && title && content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: content,
            },
          },
        });
        console.log(result);
        // router.push("/boards/new-moved");
        router.push(`/boards/new-moved/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    if (!title && !content) {
      // 틀린 것들을 먼저 제거하는 방식
      alert("수정된 내용이 없습니다.");
      return; // 에러 후 함수 종료시켜야하기 때문
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    // -> 리팩토링(early-exit) : 결과는 똑같은데, 내용이 더 쉬워짐(가독성 좋아짐)

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (content) updateBoardInput.content = content;
    try {
      if (typeof router.query.id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: password,
          boardId: router.query.id,
        },
      });
      console.log("업데이트 완료 !!");
      router.push(`/boards/new-moved/${result.data?.updateBoard?._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickResister={onClickResister}
      onClickEdit={onClickEdit}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
