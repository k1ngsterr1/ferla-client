// helper.ts
export function isTokenExpired(token: string): boolean {
  if (!token) return true;
  const decoded: any = JSON.parse(atob(token.split(".")[1]));
  const exp = decoded.exp * 1000; // Convert to milliseconds
  return Date.now() >= exp;
}
