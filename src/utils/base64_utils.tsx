export class Base64Utils {
    // Encode a string to Base64
    static encode(input: string): string {
      return btoa(input);
    }
  
    // Decode a Base64 string
    static decode(encoded: string): string {
      return atob(encoded);
    }
  }
  