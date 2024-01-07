import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.Presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeName(event) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  }

  function onChangeContent(event) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
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
        alert(error.message);
      }
    }
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickResister={onClickResister}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
    />
  );
}
