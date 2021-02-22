import {createSimilarOffers} from './data.js';
import {renderSimilarOffers} from './similar-elements.js';
import {onSelectType, onSelectTime} from './form.js'

const offers = createSimilarOffers(1);
renderSimilarOffers(offers);
onSelectType();
onSelectTime();
