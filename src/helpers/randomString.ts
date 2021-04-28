export function generateRandomString(length: number): string {
  let charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  let randomStr = '';

  for (let i = 0; i < length; i++) {
    randomStr += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return randomStr;
}
