import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Wrapper,
  ProfileImage,
  ProfileWrapper,
  ProfileInfo,
  DetailPageWrapper,
  Title,
  Label,
  ThumbImageWrapper,
  ThumbImage,
  Thumb,
  ThumbLikeDown,
  ThumbLikeUp,
  Logo,
} from "../../../../styles/emotion";

const FETCH_BOARD = gql`
  query fetchBoard($ID: ID!) {
    fetchBoard(boardId: $ID) {
      writer
      title
      contents
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      ID: router.query.id.toString(),
    },
  });

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImage src={"/images/Vector.jpg"} />
        <ProfileInfo>
          <div>{data?.fetchBoard?.writer}</div>
          <div>Date : 2024.01.01</div>
        </ProfileInfo>
        <Logo src={"/images/link.jpg"} />
        <Logo src={"/images/location.jpg"} />
      </ProfileWrapper>
      <DetailPageWrapper>
        <Title>{data?.fetchBoard?.title}</Title>
        <Label>{data?.fetchBoard?.contents}</Label>
      </DetailPageWrapper>
      <ThumbImageWrapper>
        <Thumb>
          <ThumbImage src="/images/thumb_up.jpg" />
          <ThumbLikeUp>1920</ThumbLikeUp>
        </Thumb>
        <Thumb>
          <ThumbImage src="/images/thumb_down.jpg" />
          <ThumbLikeDown>1920</ThumbLikeDown>
        </Thumb>
      </ThumbImageWrapper>
    </Wrapper>
  );
}
