import { useState, useCallback } from "react";

export const useMemoForm = () => {
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
