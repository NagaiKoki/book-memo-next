import React, { useState } from "react";
// import hooks
import { usePostForm } from "../../../utils/hooks/usePostForm";

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
        }
      `}</style>
    </div>
  );
});
