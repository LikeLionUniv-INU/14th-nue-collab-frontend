import styled from "styled-components";

const Button = styled.button`
  background-color: #dcb98e;
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  box-shadow: 0px 5px 5px gray;
  width: 80px;
  height: 35px;
  font-size: 0.75rem;
`;

export default function CheckResultBtn({ onClick }) {
  return <Button onClick={onClick}>결과확인</Button>;
}
