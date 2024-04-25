"use strict";

const quicksort = function (arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) greater.push(arr[i]);
    if (arr[i] < pivot) less.push(arr[i]);
  }
  return [...quicksort(less), pivot, ...quicksort(greater)];
};
