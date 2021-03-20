import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { COLOR } from "../../../styles";

type Props = {
  title: string;
  content: string;
};

export const EditorResult: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="Container">
      {title ? (
        <ReactMarkdown plugins={[gfm]}>{title}</ReactMarkdown>
      ) : (
        <h1 className="Empty__Title"># タイトル</h1>
      )}
      <ReactMarkdown plugins={[gfm]}>{content}</ReactMarkdown>
      <style jsx>{`
        .Container {
          padding: 15px;
        }
        .Empty__Title {
          color: ${COLOR.GRAY_COLOR_1};
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
            font-size: 16fpx;
          }
        `}
      </style>
    </div>
  );
};
