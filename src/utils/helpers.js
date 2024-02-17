// return part from long text
export function formateText(str, length) {
  let arr = str.split(' ');
  if (arr.length < 3) return str;
  let string = arr.slice(0, length).join(' ') + '...';
  return string;
}

// return formating currency from cents to dollers
export function formateCurrency(cents) {
  let dollars = cents / 100;
  let curreny = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });

  return curreny.format(dollars);
}
// return Estimated time
export function dateAfterOneWeek() {
  const today = new Date();
  const nextDay = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  return `${nextDay.getDate()}-${nextDay.getMonth()}-${nextDay.getFullYear()}`;
}
