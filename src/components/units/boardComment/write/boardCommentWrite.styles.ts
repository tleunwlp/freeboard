import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 50px 100px;
`;

export const CommentWriteWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const CommentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImgIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const CommentTxt = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoInput = styled.input`
  width: 180px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  color: #828282;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  margin-right: 20px;
`;

export const StarBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
`;

export const StarImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const WriteInputWrapper = styled.div`
  width: 100%;
  height: 152px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;

export const WriteTxt = styled.textarea`
  height: 100px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  resize: none;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0px 0px 10px;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CntLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  margin-left: 10px;
`;

export const RegisterBtn = styled.button`
  background-color: black;
  height: 52px;
  width: 91px;
  color: white;
  padding: 14px 16px;
  border: none;
  cursor: pointer;
`;
