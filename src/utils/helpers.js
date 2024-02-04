export function textSlice(str) {
  let arr = str.split(' ');
  if (arr.length < 3) return str;
  let string = arr.slice(0, 3).join(' ') + '...';
  return string;
}
