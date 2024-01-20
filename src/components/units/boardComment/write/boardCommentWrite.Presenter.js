import * as S from "./boardCommentWrite.styles";
import { Fragment } from "react";

export default function BoardCommentWriteUI() {
  return (
    <S.Wrapper>
      <S.CommentWriteWrapper>
        <S.CommentHeaderWrapper>
          <S.ImgIcon src="/images/comment.png" />
          <S.CommentTxt>댓글</S.CommentTxt>
        </S.CommentHeaderWrapper>
        <S.InfoWrapper>
          <S.InfoInput type="text" placeholder="작성자" />
          <S.InfoInput type="password" placeholder="비밀번호" />
          <S.StarImg src="/images/star.png" />
        </S.InfoWrapper>
        <S.WriteInputWrapper>
          <S.WriteTxt placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.WriteTxt>
          <S.RegisterWrapper>
            <S.CntLabel>0/100</S.CntLabel>
            <S.RegisterBtn>등록하기</S.RegisterBtn>
          </S.RegisterWrapper>
        </S.WriteInputWrapper>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}
