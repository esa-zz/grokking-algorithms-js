"use strict";

const findSmallest = function (arr) {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }

  return smallest_index;
};

const selectionSort = function (arr) {
  let newArr = [];
  let notSorted = [...arr];

  for (let i = 0; i < arr.length; i++) {
    const smallest_index = findSmallest(notSorted);
    newArr.push(...notSorted.splice(smallest_index, 1));
  }

  return newArr;
};
