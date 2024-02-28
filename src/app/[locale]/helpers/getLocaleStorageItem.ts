export function getLocaleStorageItem<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    const data: string | null = localStorage.getItem(key);
  
    if (data !== null) {
      try {
        // Attempt to parse the data as JSON
        return JSON.parse(data);
      } catch (error) {
        // If parsing fails, return the data as a simple string
        return data as T;
      }
    }
  }
  
  return defaultValue;
}