import { ref, readonly } from "vue";

export const useTitle = () => {
  const title = ref("Hello World!"); // refを使ってリアクティブな参照を作成
  const changeTitle = (value: string) => {
    title.value = value; // 直接値を更新
  };
  return {
    title: readonly(title), // titleの読み取り専用バージョンを返す
    changeTitle, // 関数そのものを返す
  };
};