import React from "react";
// import apis
import { requestPostMemo } from "../../apis/memo/requestPostMemo";
// import hooks
import { useMemoForm } from "../../utils/hooks/useMemoForm";
// import components
import { EditorForm } from "../../components/Editors/Form";
import { EditorResult } from "../../components/Editors/Result";
import { EditorHeader } from "../../components/Editors/Header";
// import styles
import { COLOR } from "../../styles";

const MemoNew = () => {
  const { title, content, onChangeContent, onChangeTitle } = useMemoForm();

  const submitHandler = async () => {
    const { payload, error } = await requestPostMemo(content);
  };

  return (
    <div className="Container">
      <EditorHeader onSubmit={submitHandler} />
      <div className="Wrapper">
        <div className="Editor__Wrapper">
          <EditorForm
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
          />
        </div>
        <div className="Result__Wrapper">
          <EditorResult title={title} content={content} />
        </div>
      </div>
      <style jsx>{`
        .Container {
        }
        .Wrapper {
          display: flex;
          width: 100%;
          height: 100vh;
          margin-top: 50px;
          padding-top: 10px;
        }
        .Editor__Wrapper {
          width: 50%;
          border-right: 1px solid ${COLOR.BORDER_COLOR_1};
        }
        .Result__Wrapper {
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default MemoNew;
