import { db } from "../../config/firebase";

export const requestPostMemo = async (content: string) => {
  const memoRef = db.collection("memo");
  console.log(memoRef);
  try {
    console.log("suc?");
    await memoRef.add({ content });
    console.log("success?");
    return { payload: "success" };
  } catch (e) {
    console.log(e);
    return { error: "error occured" };
  }
};
