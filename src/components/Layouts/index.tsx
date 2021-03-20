import React, { FC } from "react";
// import styles
import { COLOR } from "../../styles";
// import components
import { Button } from "../Common/Button/Button";

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Button text="ログインする" onClick={() => {}} />
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
      {children}
    </div>
  );
};
