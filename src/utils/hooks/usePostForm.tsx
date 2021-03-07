import { useState, useCallback } from "react";

export const usePostForm = () => {
  const [content, setContent] = useState("");

  const contentChangeHandler = useCallback(
    (text: string) => {
      setContent(text);
    },
    [content]
  );

  return {
    content,
    onChange: contentChangeHandler,
  };
};
