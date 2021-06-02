// Problem Statement #
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

/*
  [] ... [1] ... [1,2,3,4,5]
  I need accumulator: sum
  I need var: largestValue
  I need a counter: 

  for loop: 
    add each item to sum
    check if counter >= k:
      compare sum and largest: if sum is bigger:
        i would save sum to larges, else I would continue
        sum = sum - arr[counter - k]
    counter++

  return largestValue
      
*/
// [1,2,3,4,6] k=3

function max_subarray_size_k(k, arr) {
  if (!arr.length || k >= arr.length || k < 0) return null;

  let sum = 0;
  let largest = 0;
  let counter = 1;

  for (let num of arr) {
    sum += num;
    if (counter >= k) {
      largest = sum > largest ? sum : largest;
      sum -= arr[counter - k];
    }
    counter++;
  }
  return largest;
}

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(2, [])}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(2, [2])}`
);

// bruteforce/naive approach
// -----
// let maxSum = 0,
// windowSum = 0;

// for (i = 0; i < arr.length - k + 1; i++) {
//   windowSum = 0;
//   for (j = i; j < i + k; j++) {
//     windowSum += arr[j];
//   }
//   maxSum = Math.max(maxSum, windowSum);
// }
// return maxSum;

// better approach
// -----
// let maxSum = 0,
// windowSum = 0,
// windowStart = 0;

// for (window_end = 0; window_end < arr.length; window_end++) {
//   // add the next element
//   windowSum += arr[window_end];
//   // slide the window, we don't need to slide if we've not hit the required window size of 'k'
//   if (window_end >= k - 1) {
//     maxSum = Math.max(maxSum, windowSum);
//     // subtract the element going out
//     windowSum -= arr[windowStart];
//     // slide the window ahead
//     windowStart += 1;
//   }
// }
// return maxSum;
