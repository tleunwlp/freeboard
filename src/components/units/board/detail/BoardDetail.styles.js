import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProfileWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px #bdbdbd solid;
`;

export const ProfileInfo = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  margin: 0px 10px;
`;

export const DetailPageWrapper = styled.div`
  width: 996px;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const ThumbImageWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbImage = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px 30px;
`;

export const ThumbLikeUp = styled.div`
  color: #ffd600;
  font-size: 18px;
  font-weight: 400;
`;

export const ThumbLikeDown = styled.div`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
`;
