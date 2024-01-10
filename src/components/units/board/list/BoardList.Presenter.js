import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
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
      <div>
        <div>
          <span>아이디</span>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
        </div>
        {props.data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el._id}</span>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <span>{el.createdAt}</span>
          </div>
        ))}
      </div>
    </S.Wrapper>
  );
}
