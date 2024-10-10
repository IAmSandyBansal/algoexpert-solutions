let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  let temp = [];
  for (seqIdx; seqIdx < sequence.length; seqIdx++) {
    for (arrIdx; arrIdx < array.length; arrIdx++) {
      if (sequence[seqIdx] === array[arrIdx]) {
        temp.push(array[arrIdx]);
        arrIdx++;
        break;
      }
    }
  }

  return temp.length === sequence.length;
}

const result = isValidSubsequence(arr, sequence);
console.log(result);
