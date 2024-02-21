import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0px;
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

export const ListWrapper = styled.div`
  height: 584px;
  display: flex;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px 0px;
`;

export const CategoryName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const CategoryInfoTxt = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BtnWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PageBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  margin: 0px 10px;
  cursor: pointer;
`;

export const ResisterBtnWrapper = styled.div`
  display: flex;
  width: 171px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 14px 16px 14px 16px;
  background-color: white;
`;

export const RegisterImg = styled.img`
  margin-right: 5px;
`;

export const ResisterBtn = styled.button`
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;
