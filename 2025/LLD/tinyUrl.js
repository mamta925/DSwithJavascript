/**
 * there are x number of requiest
 * per sec getting 60 request;
 * x*60*60*24*365*10 = y for 10 years
 * charachter set for tiny url
 * 
 * 
 * a-z = 26. A-Z=62, 26 =10 = 62 char
 * Y number of unique url with 62 char combination
 * 
 * if we are taking 1 char then 62 unique url
 * if 2 then 62*62
 * if 3 then 62*62*62
 * 62^n>y
 * 
 * n>(log base 62)Y
 * 
 */

const BASE62_CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encodeBase62(num) {
  let encoded = '';
  const base = BASE62_CHARS.length;
  while (num > 0) {
    encoded = BASE62_CHARS[num % base] + encoded;
    num = Math.floor(num / base);
  }
  return encoded || '0'; // handle 0 case
}

function decodeBase62(str) {
  let decoded = 0;
  const base = BASE62_CHARS.length;
  for (let char of str) {
    decoded = decoded * base + BASE62_CHARS.indexOf(char);
  }
  return decoded;
}

function generateRandomKey(length = 6) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += BASE62_CHARS.charAt(Math.floor(Math.random() * BASE62_CHARS.length));
  }
  return result;
}

module.exports = {
  encodeBase62,
  decodeBase62,
  generateRandomKey
};
