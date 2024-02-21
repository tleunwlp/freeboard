import * as S from "./boardCommentList.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./boardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.Wrapper>
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper key={el._id}>
          <S.ImageWrapper>
            <S.ProfileImg src="/images/profile.png" />
          </S.ImageWrapper>
          <S.CommentWrapper>
            <S.Column1Wrapper>
              <S.WriterTxt>{el.writer}</S.WriterTxt>
              <S.Img src="/images/star.png" />
              <S.Img src="/images/star.png" />
              <S.Img src="/images/star.png" />
              <S.Img src="/images/star.png" />
              <S.Img src="/images/star.png" />
            </S.Column1Wrapper>
            <S.Column2Wrapper>{el.contents}</S.Column2Wrapper>
            <S.DateTxt>{getDate(el.createdAt)}</S.DateTxt>
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
      ))}
    </S.Wrapper>
  );
}
