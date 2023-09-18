export function getLocaleStorageItem<T>(key: string): T | null {
  const data: string | null = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  }

  return null;
}
