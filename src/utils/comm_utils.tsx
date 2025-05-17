export class CommUtils {
  
  static parseBoolean(str: string): boolean {
    // JSON.parse 僅接受 "true" 或 "false"，否則會丟錯誤
    return str === 'true';
  }

  static isTextNotBlank(str: string | null | undefined): boolean {
    return str !== null && str !== undefined && str.trim().length > 0;
  }

}
