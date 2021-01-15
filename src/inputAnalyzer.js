function numToSummands(num) {
  const arr = num.toString().split('');
  const len = arr.length;
  return arr.map ((x, index) => x * Math.pow(10, (len - index - 1)));
}


function summandsArrays(width, height) {
  return [numToSummands(width), numToSummands(height)];
}

const inputAnalyzer = { summandsArrays, numToSummands }
export default inputAnalyzer;
