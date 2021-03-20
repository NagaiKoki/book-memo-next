import React from "react";
// import styles
import { COLOR } from "../../../styles";

type Props = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      {text}
      <style jsx>{`
        .Button {
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: bold;
          background: ${COLOR.MAIN_1};
          color: ${COLOR.WHITE_COLOR_1};
          cursor: pointer;
        }
        .Button:hover {
          opacity: 0.6;
        }
      `}</style>
    </button>
  );
};
