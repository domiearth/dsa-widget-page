export class Base64Utils {
  // Encode a string to Base64 (with UTF-8 support)
  static encode(input: string): string {
      const utf8Bytes = new TextEncoder().encode(input);
      return btoa(String.fromCharCode(...utf8Bytes));
  }

  // Decode a Base64 string (with UTF-8 support)
  static decode(encoded: string): string {
      const binaryString = atob(encoded);
      const bytes = new Uint8Array([...binaryString].map(char => char.charCodeAt(0)));
      return new TextDecoder().decode(bytes);
  }
}
