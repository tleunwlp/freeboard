import * as S from "./BoardList.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.InputWrapper>
          <S.SearchIcon src="/images/search.png" />
          <S.TitleInput type="text" placeholder="제목을 입력해주세요." />
        </S.InputWrapper>
        <S.DateInput type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
        <S.SearchBtn>검색하기</S.SearchBtn>
      </S.SearchWrapper>
      <S.ListWrapper>
        <S.CategoryWrapper>
          <S.CategoryName>아이디</S.CategoryName>
          <S.CategoryName>제목</S.CategoryName>
          <S.CategoryName>작성자</S.CategoryName>
          <S.CategoryName>날짜</S.CategoryName>
        </S.CategoryWrapper>
        {props.data?.fetchBoards.map((el) => (
          <S.CategoryWrapper key={el._id}>
            <S.CategoryInfoTxt>
              {String(el._id).slice(-4).toUpperCase()}
            </S.CategoryInfoTxt>
            <S.CategoryInfoTxt id={el._id} onClick={props.onClickMoveToDetail}>
              {el.title}
            </S.CategoryInfoTxt>
            <S.CategoryInfoTxt>{el.writer}</S.CategoryInfoTxt>
            <S.CategoryInfoTxt>{getDate(el.createdAt)}</S.CategoryInfoTxt>
          </S.CategoryWrapper>
        ))}
      </S.ListWrapper>
      <S.Footer>
        <S.BtnWrapper>
          <S.PageBtn>&lt;</S.PageBtn>
          <S.PageBtn>1</S.PageBtn>
          <S.PageBtn>2</S.PageBtn>
          <S.PageBtn>&gt;</S.PageBtn>
        </S.BtnWrapper>
        <S.ResisterBtnWrapper>
          <S.RegisterImg src="/images/register.png" />
          <S.ResisterBtn onClick={props.onClickMoveToResister}>
            게시물 등록하기
          </S.ResisterBtn>
        </S.ResisterBtnWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}
