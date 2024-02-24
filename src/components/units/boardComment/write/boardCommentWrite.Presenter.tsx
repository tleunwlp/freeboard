import * as S from "./boardCommentWrite.styles";
import { Fragment } from "react";
import { IBoardCommentWriteUIProps } from "./boardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.CommentWriteWrapper>
        <S.CommentHeaderWrapper>
          <S.ImgIcon src="/images/comment.png" />
          <S.CommentTxt>댓글</S.CommentTxt>
        </S.CommentHeaderWrapper>
        <S.InfoWrapper>
          <S.InfoInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          />
          <S.InfoInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <S.StarBtn>
            <S.StarImg src="/images/star.png" />
          </S.StarBtn>
          <S.StarBtn>
            <S.StarImg src="/images/star.png" />
          </S.StarBtn>
          <S.StarBtn>
            <S.StarImg src="/images/star.png" />
          </S.StarBtn>
          <S.StarBtn>
            <S.StarImg src="/images/star.png" />
          </S.StarBtn>
          <S.StarBtn>
            <S.StarImg src="/images/star.png" />
          </S.StarBtn>
        </S.InfoWrapper>
        <S.WriteInputWrapper>
          <S.WriteTxt
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
          ></S.WriteTxt>
          <S.RegisterWrapper>
            <S.CntLabel>0/100</S.CntLabel>
            <S.RegisterBtn onClick={props.onClickCommentReg}>
              등록하기
            </S.RegisterBtn>
          </S.RegisterWrapper>
        </S.WriteInputWrapper>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}
