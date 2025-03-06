export class HttpClient {
  private static async request<T>(url: string, options: RequestInit, responseType: "json" | "text" = "json"): Promise<T> {
      try {
          const response = await fetch(url, options);
          if (!response.ok) {
              throw new Error(`${options.method} request failed: ${response.status} ${response.statusText}`);
          }
          return responseType === "json" ? await response.json() : (await response.text()) as unknown as T;
      } catch (error) {
          console.error(error);
          throw error;
      }
  }

  static async get<T>(url: string, headers: HeadersInit = {}, responseType: "json" | "text" = "json"): Promise<T> {
      return this.request<T>(url, { method: "GET", headers }, responseType);
  }

  static async post<T>(url: string, data: unknown, headers: HeadersInit = {}): Promise<T> {
      return this.request<T>(url, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...headers },
          body: JSON.stringify(data),
      });
  }
}
