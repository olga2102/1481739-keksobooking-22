// const SERVER_GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';
// const SERVER_POST_URL = 'https://22.javascript.pages.academy/keksobooking';
const BASE_URL = 'https://22.javascript.pages.academy/keksobooking';
const GET_URL = BASE_URL;
const POST_URL = `${BASE_URL}/data`;


const getData = (onSuccess, onFail) => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    })
}

const sendData = (onSuccess, onFail, body) => {
  fetch(
    POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};