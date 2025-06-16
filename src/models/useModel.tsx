import { useState, useEffect } from 'react';
import { modelService } from './ModelService';

export const useModel = () => {
  // 這個 state 的唯一目的就是觸發重新渲染。它的值本身不重要。
  const [, setTick] = useState(0);

  useEffect(() => {
    // 元件掛載時，向 service 訂閱。
    const unsubscribe = modelService.subscribe(() => {
      // 當 service 呼叫 notify()，此回呼函式會被執行。
      // 我們透過更新 state 來強制元件重新渲染，以取得最新資料。
      setTick(tick => tick + 1);
    });

    // 元件卸載時，執行 subscribe 回傳的清理函式來取消訂閱。
    // 這一步至關重要，可以防止記憶體洩漏和不必要的錯誤。
    return unsubscribe;
  }, []); // 空依賴陣列確保此 effect 只在掛載和卸載時執行一次。

  // 將 service 實例回傳，讓元件可以直接使用它的公開方法。
  return { modelService: modelService };
};