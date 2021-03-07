import React from "react";
// import hooks
import { usePostForm } from "../../utils/hooks/usePostForm";
// import components
import { EditorForm } from "../../components/Editors/Form";
// import styles
import { COLOR } from "../../styles";

const PostNew = () => {
  const { content, onChange } = usePostForm();

  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Editor__Wrapper">
          <EditorForm onChange={onChange} />
        </div>
        <div className="Result__Wrapper"></div>
      </div>
      <style jsx>{`
        .Container {
        }
        .Wrapper {
          display: flex;
          width: 100%;
          height: 100vh;
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

export default PostNew;
