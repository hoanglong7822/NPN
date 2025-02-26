import { useState } from "react";
import "./Form.css";

export default function Form({ handleChangeState }) {
  const [password, setPassword] = useState(""); // Mật khẩu mặc định
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "NgaiuLongratnhieu") {
      setMessage("Đúng rồi đấy");
      handleChangeState();
    } else {
      setMessage("Sai mật khẩu rồi Pnga ơi");
    }
  };

  return (
    <form className="password-container" onSubmit={handleSubmit}>
      <label htmlFor="password">
        Nhập mật khẩu vào cái ô này đi Pnga iu giấu
      </label>
      <div className="password-wrapper">
        <input
          type="texta"
          id="password"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhanh lên điều bất ngờ còn ở phía sau      :)))))"
        />
      </div>
      <button type="submit" className="submit-btn">
        Nhấn để submit
      </button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}
