// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return [
    arr[0],
    arr[1]
  ];
};

const returnLastTwoDrivers = function(arr) {
  return [
    arr[arr.length - 2],
    arr[arr.length - 1]
  ];
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = () => {
  return function(multiplier) {
    return multiplier * multiplier;
  };
};


const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => {
  return fare * 3;
};

const selectDifferentDrivers = (array, func) => {
  return func(array);
};