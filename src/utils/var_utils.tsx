export class VarUtils {
    // Get a variable from query string or environment variables
    static getVar(key: string): string | null {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has(key)) {
        return urlParams.get(key) || null;
      }
      return import.meta.env[`VITE_${key}`] || null;
    }
  }
  