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

export const Wrapper_info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left; 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const AddressNumWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddressNumber = styled.input`
  width: 77px;
  height: 52px;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const AddressNumberBtn = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImageUpload = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const MainSetWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const RegButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  border: none;
  font-weight: 500;
  font-size: 16px;
  padding: 14px 60px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
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
