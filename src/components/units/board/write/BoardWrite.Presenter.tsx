import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      <S.Wrapper_info>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            readOnly={!!props.data?.fetchBoard.writer}
          />
          <S.Error>{props.nameError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.InputWrapper>
      </S.Wrapper_info>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard?.title}
        />
        <S.Error>{props.titleError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContent}
          defaultValue={props.data?.fetchBoard?.contents}
        />
        <S.Error>{props.contentError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.AddressNumWrapper>
          <S.AddressNumber placeholder="07250" />
          <S.AddressNumberBtn>우편번호 검색</S.AddressNumberBtn>
        </S.AddressNumWrapper>
        <S.Address />
        <S.Address />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요." />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.ImageUpload>+</S.ImageUpload>
        <S.ImageUpload>+</S.ImageUpload>
        <S.ImageUpload>+</S.ImageUpload>
      </S.ImageWrapper>
      <S.MainSetWrapper>
        <S.Label>메인 설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.MainSetWrapper>
      <S.ButtonWrapper>
        <S.RegButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickResister}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.RegButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
