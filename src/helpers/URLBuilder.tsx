export class URLBuilder {
    private url: URL;
    private params: URLSearchParams;
  
    constructor(host: string) {
      this.url = new URL(host);
      this.params = new URLSearchParams();
    }
  
    addParameter(key: string, value: string): URLBuilder {
      this.params.append(key, value);
      return this; // Return `this` for method chaining
    }
  
    build(): string {
      this.url.search = this.params.toString();
      return this.url.toString();
    }
  }
  
  // Example Usage:
//   const url = new URLBuilder("https://example.com/api")
//     .addParameter("user", "123")
//     .addParameter("token", "abc123")
//     .build();
  
//   console.log(url);
  // Output: "https://example.com/api?user=123&token=abc123"
  