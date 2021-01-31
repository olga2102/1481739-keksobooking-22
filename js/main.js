const RangeValidity = function (min,max) {
  if (min < 0 || max < 0 || max <= min) {
    return false;
  }
  return true;
}

const getRandomIntInclusive = function (min, max) {
  if (RangeValidity(min, max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandomIntInclusive (1, 5);

const getRandomInt = function (min, max, fix = 2) {
  if (RangeValidity (min, max)) {
    const rand =  Math.random() * (max - min + 1) + min;

    return rand.toFixed(fix);
  }
}

getRandomInt (1, 5, 3);
