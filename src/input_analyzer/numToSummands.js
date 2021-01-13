function numToSummands(num) {
  const arr = num.toString().split('');
  const len = arr.length;
  return arr.map ((x, index) => x * Math.pow(10, (len - index - 1)));
}

export default numToSummands;