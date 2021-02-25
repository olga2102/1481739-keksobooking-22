import {createSimilarOffers} from './data.js';
// import {renderSimilarOffers} from './similar-elements.js';
import {onSelectType, onSelectTime, inactivateForm, inactivateFields, inactivateMapForm, inactivateMapFormFields} from './form.js';
import {initMap} from './map.js'

const offers = createSimilarOffers(1);
// renderSimilarOffers(offers);
onSelectType();
onSelectTime();
inactivateFields();
inactivateForm()
inactivateMapForm();
inactivateMapFormFields();
initMap(offers);
