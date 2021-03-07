import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  content: string;
};

export const EditorResult: React.FC<Props> = ({ content }) => {
  return (
    <div className="Container">
      <ReactMarkdown plugins={[gfm]}>{content}</ReactMarkdown>
      <style jsx>{`
        .Container {
          padding: 15px;
        }
      `}</style>
    </div>
  );
};
