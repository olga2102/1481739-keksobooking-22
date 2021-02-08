const TOTAL_COUNT = 10;
const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 8;
const offerTitles = [
  'Лучшее, что ты видел',
  'Выгодное предложение',
  'Нормальный вариант',
  'Закрой глаза и жми сюда',
  'Не для слабонервных',
];

const MIN_PRICE = 1000;
const MAX_PRICE = 100000;
const offerTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const MIN_ROOMS = 1;
const MAX_ROOMS = 10;
const MIN_GUESTS = 1;
const MAX_GUESTS  = 30;
const offerCheckInTimes = [
  '12:00',
  '13:00',
  '14:00',
];

const offerCheckOutTimes = [
  '12:00',
  '13:00',
  '14:00',
];

const offerFeatures = [
  'wifi',
  'dishwasher',
  'parking', 'washer',
  'elevator',
  'conditioner',
];

const offerDescriptions = [
  'Идеальное место',
  'Ой, хорошо',
  'Норм',
  'Ну,если не придираться, пойдет',
  'Все плохо',
  'За чтооо',
];

const offerPhotos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const xMinLocation = 35.65000;

const xMaxLocation = 35.70000;

const yMinLocation = 139.70000;

const yMaxLocation = 139.80000;

const checkRangeValidity = (min,max) => {
  if (min < 0 || max < 0 || max <= min) {
    return false;
  }

  return true;
}

const getRandomIntInclusive = (min, max) => {
  if (checkRangeValidity(min, max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return -1;
}

const getRandomFloatInclusive = (min, max, fix = 2) => {
  if (checkRangeValidity(min, max)) {
    const randomNumber =  Math.random() * (max - min) + min;

    return randomNumber.toFixed(fix);
  }

  return -1;
}


const getRandomArrayElement = (elements) => {
  const indexElement = getRandomIntInclusive(0, elements.length - 1);
  return elements[indexElement];
};

const getUniqueArray = (array) => {
  const uniqueArray = [];

  for (let i=0; i <= array.length-1; i++) {
    const randomElement = getRandomArrayElement(array);

    if (!uniqueArray.includes(randomElement)) {
      uniqueArray.push(randomElement);
    }
  }

  return uniqueArray;
};

const getLocation = () => {
  const x = getRandomFloatInclusive(xMinLocation, xMaxLocation, 5);
  const y = getRandomFloatInclusive(yMinLocation, yMaxLocation, 5);

  return [x, y]
};

const getAuthor = () => {
  return  {avatar: 'img/avatars/user' + 0 + getRandomIntInclusive(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT) + '.png'};
};

const getTotalObject = () => {
  return {
    author: getAuthor(),
    offer: {
      title: getRandomArrayElement(offerTitles),
      address: getLocation(),
      price: getRandomIntInclusive(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(offerTypes),
      rooms: getRandomIntInclusive(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomIntInclusive(MIN_GUESTS , MAX_GUESTS ),
      checkin: getRandomArrayElement(offerCheckInTimes),
      checkout: getRandomArrayElement(offerCheckOutTimes),
      description: getRandomArrayElement(offerDescriptions),
      features: getUniqueArray(offerFeatures),
      photos: getUniqueArray(offerPhotos),
    },
    location: getLocation(),
  }
}

const createSimilarOffers = new Array(TOTAL_COUNT).fill(null).map(() => getTotalObject());

createSimilarOffers();
