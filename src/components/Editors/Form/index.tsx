import React, { useCallback, useRef } from "react";
import { COLOR } from "../../../styles";

type Props = {
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
};

export const EditorForm: React.FC<Props> = React.memo(
  ({ onChangeTitle, onChangeContent }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const inputKeyPressHandler = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && textareaRef.current) {
          textareaRef.current.focus();
        }
      },
      [textareaRef]
    );

    return (
      <div>
        <input
          name="form"
          className="Form Title__Form"
          onChange={(e) => onChangeTitle(e.target.value)}
          onKeyDown={inputKeyPressHandler}
        />
        <textarea
          ref={textareaRef}
          name="form"
          className="Form Content__Form"
          onChange={(e) => onChangeContent(e.target.value)}
        />
        <style jsx>{`
          .Form {
            font-size: 16px;
            resize: none;
            border: none;
            letter-spacing: 1px;
          }
          .Title__Form {
            width: 100% !important;
            padding: 15px;
            box-sizing: border-box;
          }
          .Content__Form {
            width: 100%;
            height: 100vh;
            padding: 15px;
            box-sizing: border-box;
          }
        `}</style>
        <style jsx global>
          {`
            h1 {
              font-size: 25px;
              font-weight: bold;
              color: ${COLOR.BLACK_COLOR_1};
            }
            h2 {
              font-size: 23px;
              font-weight: bold;
              color: ${COLOR.BLACK_COLOR_1};
            }
            h3 {
              font-size: 21px;
              font-weight: bold;
              color: ${COLOR.BLACK_COLOR_1};
            }
            h4 {
              font-size: 19px;
              font-weight: bold;
              color: ${COLOR.BLACK_COLOR_1};
            }
            h5 {
              font-size: 17px;
              font-weight: bold;
              color: ${COLOR.BLACK_COLOR_1};
            }
            p {
              margin: 10px;
              font-size: 14px;
            }
          `}
        </style>
      </div>
    );
  }
);
