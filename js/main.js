import {
  onSelectType,
  onSelectTime,
  deactivateForm,
  onSelectGuestAmount,
  setMainFormSubmit,
  handleFormReset} from './form.js';
import {initMap} from './map.js'
import {showGetErrorMessage} from './util.js';
import {getData} from './api.js';

onSelectType();
onSelectTime();
onSelectGuestAmount();
deactivateForm();

getData((data) => {
  initMap(data);
  setMainFormSubmit();
  handleFormReset();
}, showGetErrorMessage);
