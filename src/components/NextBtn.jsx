import styled from "styled-components";

const Button = styled.button`
  background-color: #dcb98e;
  border: none;
  border-radius: 10px;
  width: 120px;
  height: 30px;
  font-size: 0.875rem;
`;

export default function NextBtn({ onClick, name }) {
  return <Button onClick={onClick}>{name}</Button>;
}
