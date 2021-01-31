const RangeValidity = function (min,max) {
  const isNegativeNumber = min < 0 || max < 0;
  const isWrongRange = max <= min;

  if (isNegativeNumber) {
    throw new Error('Диапазон должен принимать положительное значение');
  }

  if (isWrongRange) {
    throw new Error('Неверно указан диапазон');
  }

  return true;
}

const getRandomIntInclusive = function (min, max) {
  if (RangeValidity) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandomIntInclusive (1, 5);

const getRandomInt = function (min, max, fix = 2) {
  if (RangeValidity) {
    const rand =  Math.random() * (max - min + 1) + min;

    return rand.toFixed(fix);
  }
}

getRandomInt (1, 5, 3);
