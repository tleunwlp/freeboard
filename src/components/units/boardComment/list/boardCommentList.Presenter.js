import * as S from "./boardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.ImageWrapper>
          <S.ProfileImg src="/images/profile.png" />
        </S.ImageWrapper>
        <S.CommentWrapper>
          <S.Column1Wrapper>
            <S.WriterTxt>노원두</S.WriterTxt>
            <S.Img src="/images/star.png" />
          </S.Column1Wrapper>
          <S.Column2Wrapper>
            진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
            부탁드립니다~!
          </S.Column2Wrapper>
          <S.DateTxt>2024.01.21</S.DateTxt>
        </S.CommentWrapper>
        <S.IconWrapper>
          <S.IconBtn>
            <S.Img src="/images/pencil.png" />
          </S.IconBtn>
          <S.IconBtn>
            <S.Img src="/images/cancel.png" />
          </S.IconBtn>
        </S.IconWrapper>
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
