import * as S from "./BoardDetail.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.PageWrapper>
        <S.ProfileWrapper>
          <S.ProfileImage src={"/images/Vector.jpg"} />
          <S.ProfileInfo>
            <div>{props.data?.fetchBoard?.writer}</div>
            <div>{getDate(props.data?.fetchBoard?.createdAt)}</div>
          </S.ProfileInfo>
          <S.Logo src={"/images/link.jpg"} />
          <S.Logo src={"/images/location.jpg"} />
        </S.ProfileWrapper>
        <S.DetailPageWrapper>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Label>{props.data?.fetchBoard?.contents}</S.Label>
        </S.DetailPageWrapper>
        <S.ThumbImageWrapper>
          <S.Thumb>
            <S.ThumbImage src="/images/thumb_up.jpg" />
            <S.ThumbLikeUp>1920</S.ThumbLikeUp>
          </S.Thumb>
          <S.Thumb>
            <S.ThumbImage src="/images/thumb_down.jpg" />
            <S.ThumbLikeDown>1920</S.ThumbLikeDown>
          </S.Thumb>
        </S.ThumbImageWrapper>
      </S.PageWrapper>
      <S.BottomWrapper>
        <S.BottomBtn onClick={props.onClickList}>목록으로</S.BottomBtn>
        <S.BottomBtn onClick={props.onClickEdit}>수정하기</S.BottomBtn>
        <S.BottomBtn onClick={props.onClickDelete}>삭제하기</S.BottomBtn>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
