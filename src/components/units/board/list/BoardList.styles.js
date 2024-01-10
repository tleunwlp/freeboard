import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 776px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const SearchIcon = styled.img`
  margin: 0px 10px;
`;

export const TitleInput = styled.input`
  background-color: #f2f2f2;
  border: none;
  width: 600px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const DateInput = styled.input`
  width: 244px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px 14px 16px;
  text-align: center;
`;

export const SearchBtn = styled.button`
  width: 94px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 14px 16px 14px 16px;
  color: #ffffff;
  background-color: #000000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
