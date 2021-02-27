// import {createSimilarOffers} from './data.js';
// import {renderSimilarOffers} from './popup.js';
import {onSelectType, onSelectTime, inactivateForm} from './form.js';
import {initMap} from './map.js'

// const offers = createSimilarOffers(10);
// renderSimilarOffers(offers);
onSelectType();
onSelectTime();
inactivateForm()
initMap();
