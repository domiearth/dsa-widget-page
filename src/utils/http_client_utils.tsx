export class HttpClient {
    private static async request<T>(url: string, options: RequestInit): Promise<T> {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`${options.method} request failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  
    static async get<T>(url: string, headers: HeadersInit = {}): Promise<T> {
      return this.request<T>(url, { method: 'GET', headers });
    }
  
    static async post<T>(url: string, data: unknown, headers: HeadersInit = {}): Promise<T> {
      return this.request<T>(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify(data),
      });
    }
  }
  