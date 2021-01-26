
exports.min = function min (array) {
  if (array === undefined) {
    return 0;
  } else {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }

    return array.length > 0 ? min : 0;
  }
};

exports.max = function max (array) {
  if (array === undefined) {
    return 0;
  } else {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }

    return array.length > 0 ? max : 0;
  }
};

exports.avg = function avg (array) {
  let sum = 0;

  if (array === undefined) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }

  return array.length > 0 ? sum/array.length : 0;
};
