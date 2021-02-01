const checkRangeValidity = function (min,max) {
  if (min < 0 || max < 0 || max <= min) {
    return false;
  }
  return true;
}

const getRandomIntInclusive = function (min, max) {
  if (checkRangeValidity(min, max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return -1;
}

getRandomIntInclusive (1, 5);

const getRandomFloatInclusive = function (min, max, fix = 2) {
  if (checkRangeValidity (min, max)) {
    const randomNumber =  Math.random() * (max - min + 1) + min;

    return randomNumber.toFixed(fix);
  }
  return -1;
}

getRandomFloatInclusive (1, 5, 3);
