import styled from "styled-components";
import 흰색실 from "../img/흰색실.png";

const ListItem = styled.div`
  // 리스트 아이템 스타일
  position: relative;
  display: flex;
  align-items: center;
  width: 275px;
  height: 40px;
  padding: 6px;
  background-color: #eedbc6;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Sil = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) scaleX(-1);
  height: 160%;
  pointer-events: none;
`;

const CheckBox = styled.div`
  // 체크박스 스타일
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 12px;
  background-color: ${(props) => (props.checked ? "#dcb88e" : "#a2392d")};
`;

const CheckMark = styled.div`
  // 체크 표시 스타일
  width: 6px;
  height: 10px;
  border-right: 2px solid ${(props) => (props.checked ? "#341d02" : "#fff2df")};
  border-bottom: 2px solid ${(props) => (props.checked ? "#341d02" : "#fff2df")};
  transform: rotate(45deg);
  margin-bottom: 4px;
`;

export default function CheckSalBox({ name, color }) {
  return (
    <ListItem style={{ border: `2px solid ${color}` }}>
      {/* 항상 체크된(true) 상태로 고정 */}
      <CheckBox checked={true}>
        <CheckMark checked={true} />
      </CheckBox>
      {name}

      <Sil src={흰색실} />
    </ListItem>
  );
}
