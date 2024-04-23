"use strict";

const binarySearch = function (arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === item) return `We Found it!`;
    if (guess < item) low = mid + 1;
    if (guess > item) high = mid - 1;
  }
  return null;
};
