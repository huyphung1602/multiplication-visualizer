function mulMixer(arr, num) {
  return arr.map (x => [num, x]);
}

function buildMatrix(arr) {
  return arr[1].map (x => mulMixer(arr[0], x));
}

const preRenderer = { mulMixer, buildMatrix };
export default preRenderer;