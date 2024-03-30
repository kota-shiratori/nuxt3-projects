import { ref, readonly } from "vue";
import type { Ref } from "vue";

// カスタムフックの返却値の型を定義
interface CounterState {
  counter: Readonly<Ref<number>>;
  countUp: () => void;
  countDown: () => void;
  reset: () => void;
}

export const useCounterState = (): CounterState => {
  const count = ref<number>(0); // `ref` に型注釈を追加して、number 型のリアクティブな状態を作成
  return {
    counter: readonly(count), // `readonly` でラップした `count` を返却
    countUp: () => countUp(count),
    countDown: () => countDown(count),
    reset: () => reset(count),
  };
};

// カウントアップ、カウントダウン、リセット関数を定義
const countUp = (count: Ref<number>): void => {
  count.value++;
};

const countDown = (count: Ref<number>): void => {
  if (count.value > 0) {
    count.value--;
  }
};

const reset = (count: Ref<number>): void => {
  count.value = 0;
};
