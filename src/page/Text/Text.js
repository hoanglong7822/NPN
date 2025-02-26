import { useState, useEffect } from "react";
import styles from "./Text.module.css";

export default function Text() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#ff5722"); // Màu chữ
  const [opacity, setOpacity] = useState(1); // Hiệu ứng nhấp nháy

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === "") {
        typeEffect(
          "Tôi viết ra trang web lỏ này chỉ để nói với Pnga rằng 'CẬU XẤU TÍNH VÃI' "
        ); // Gọi hiệu ứng gõ chữ
      } else {
        setText("");
      }
      setColor(getRandomColor()); // Đổi màu ngẫu nhiên
    }, 2000);

    return () => clearInterval(interval);
  }, [text]);

  // Hàm tạo hiệu ứng gõ chữ từng ký tự
  const typeEffect = (word) => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(word.slice(0, i + 1));
      i++;
      if (i === word.length) clearInterval(typingInterval);
    }, 100);
  };

  // Hàm tạo màu ngẫu nhiên
  const getRandomColor = () => {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  };

  return (
    <h1 className={styles.text} style={{ color: color, opacity: opacity }}>
      {text}
    </h1>
  );
}
