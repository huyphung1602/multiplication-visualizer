import numToSummands from "./numToSummands";

function inputAnalyzer(width, height) {
  return [numToSummands(width), numToSummands(height)];
}

export default inputAnalyzer;
