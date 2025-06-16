import { CredentialResponse } from "@react-oauth/google";

// 定義 List View 中每個項目的型別
export interface RootData {
  gCredentialResponse?: CredentialResponse;
}

// 擴充 PrimeReact 的 TreeNode，使其可以攜帶我們自訂的資料


class ModelService {
  // 1. Singleton 模式：靜態私有實例
  private static instance: ModelService;

  // 存放所有訂閱者的回呼函式
  private subscribers: Set<() => void> = new Set();

  // 我們的核心資料，私有化以保護它
  private rootData: RootData ={};

  // 2. Singleton 模式：私有化建構子，防止外部 new
  private constructor() {
  }

  // 3. Singleton 模式：提供靜態方法來取得唯一的實例
  public static getInstance(): ModelService {
    if (!ModelService.instance) {
      ModelService.instance = new ModelService();
    }
    return ModelService.instance;
  }

  // 4. Observer 模式：通知所有訂閱者
  public notify() {
    console.log("Notifying all subscribers of data change...");
    this.subscribers.forEach(callback => callback());
  }


  public subscribe(callback: () => void): () => void {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
      console.log("A subscriber has unsubscribed.");
    };
  }

  public getRootData(): RootData {
    return this.rootData;
  }


}

// 導出唯一的 Service 實例
export const modelService = ModelService.getInstance();