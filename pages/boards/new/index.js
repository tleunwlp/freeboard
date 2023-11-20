import Head from "next/head";
import {
  Wrapper,
  Title,
  Label,
  InputWrapper,
  Writer,
  Password,
  Wrapper_info,
  Subject,
  Contents,
  AddressNumWrapper,
  AddressNumber,
  AddressNumberBtn,
  Address,
  Youtube,
  ImageWrapper,
  ImageUpload,
  MainSetWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  RegButton,
} from "../../../styles/emotion";

export default function ResisterPage() {
  // 자바스크립트 쓰는 곳

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Wrapper_info>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="text" placeholder="비밀번호를 입력해주세요." />
        </InputWrapper>
      </Wrapper_info>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents placeholder="내용을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <AddressNumWrapper>
          <AddressNumber placeholder="07250" />
          <AddressNumberBtn>우편번호 검색</AddressNumberBtn>
        </AddressNumWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        <ImageUpload>+</ImageUpload>
        <ImageUpload>+</ImageUpload>
        <ImageUpload>+</ImageUpload>
      </ImageWrapper>
      <MainSetWrapper>
        <Label>메인 설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </MainSetWrapper>
      <ButtonWrapper>
        <RegButton>등록하기</RegButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
