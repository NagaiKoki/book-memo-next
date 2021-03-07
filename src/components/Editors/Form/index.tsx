import React from "react";
import { COLOR } from "../../../styles";

type Props = {
  onChange: (text: string) => void;
};

export const EditorForm: React.FC<Props> = React.memo(({ onChange }) => {
  return (
    <div>
      <textarea
        name="form"
        className="Form"
        onChange={(e) => onChange(e.target.value)}
      />
      <style jsx>{`
        .Form {
          width: 100%;
          height: 100vh;
          padding: 15px;
          box-sizing: border-box;
        }
      `}</style>
      <style jsx global>
        {`
          h1 {
            font-size: 22px;
            font-weight: bold;
            color: ${COLOR.BLACK_COLOR_1};
          }
          h2 {
            font-size: 20px;
            font-weight: bold;
            color: ${COLOR.BLACK_COLOR_1};
          }
          h3 {
            font-size: 18px;
            font-weight: bold;
            color: ${COLOR.BLACK_COLOR_1};
          }
          h4 {
            font-size: 16px;
            font-weight: bold;
            color: ${COLOR.BLACK_COLOR_1};
          }
          h5 {
            font-size: 14px;
            font-weight: bold;
            color: ${COLOR.BLACK_COLOR_1};
          }
          p {
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
});
