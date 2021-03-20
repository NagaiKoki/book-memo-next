import { useState, useCallback } from "react";

export const useMemoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const contentChangeHandler = useCallback(
    (text: string) => {
      setContent(text);
    },
    [content]
  );

  const titleChangeHandler = useCallback((text: string) => {
    setTitle(text);
  }, []);

  return {
    title,
    content,
    onChangeContent: contentChangeHandler,
    onChangeTitle: titleChangeHandler,
  };
};
