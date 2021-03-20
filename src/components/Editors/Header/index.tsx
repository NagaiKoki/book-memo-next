import React from "react";
// import styles
import { COLOR } from "../../../styles";
// import components
import { Button } from "../../Common/Button/Button";

type Props = {
  onSubmit: () => void;
};

export const EditorHeader: React.FC<Props> = ({ onSubmit }) => {
  return (
    <header className="header">
      <nav className="nav">
        <Button text="投稿する" onClick={onSubmit} />
      </nav>
      <style jsx>
        {`
          .header {
            position: fixed;
            top: 0;
            width: 100%;
            border-bottom: 1px solid ${COLOR.BORDER_COLOR_1};
            background: ${COLOR.WHITE_COLOR_1};
          }
          .nav {
            display: flex;
            justify-content: flex-end;
            padding: 10px 20px;
          }
        `}
      </style>
    </header>
  );
};
