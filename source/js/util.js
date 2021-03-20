const ALERT_SHOW_TIME = 5000;

const appendContent = (element, content, appendType = 'textContent') => {
  if (!content) {
    return element.remove();
  }

  switch (appendType) {
    case 'textContent':
      element.textContent = content;
      break;
    case 'innerHTML':
      element.innerHTML = '';
      element.innerHTML = content;
      break;
    case 'src':
      element.src = content;
      break;
    default:
      throw new Error(`Unexpected appendType: ${appendType}`);
  }
};

const showGetErrorMessage = () => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Ошибка загрузки данных с сервера';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export {
  appendContent,
  showGetErrorMessage,
  isEscEvent
};
