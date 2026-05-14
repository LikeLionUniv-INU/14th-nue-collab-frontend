import { useNavigate } from "react-router-dom";
import BirthPopupModal from "../components/BirthPopupModal";

export default function Noyear() {
  const navigate = useNavigate();
  return (
    <BirthPopupModal
      content="생년은 필수 입력 항목입니다!"
      onClose={() => navigate("/birth")}
    />
  );
}
