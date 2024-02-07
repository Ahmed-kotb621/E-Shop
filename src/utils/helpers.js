// return part from long text
export function textSlice(str) {
  let arr = str.split(' ');
  if (arr.length < 3) return str;
  let string = arr.slice(0, 3).join(' ') + '...';
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
