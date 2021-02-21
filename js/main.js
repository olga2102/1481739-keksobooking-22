import {createSimilarOffers} from './data.js';
import {renderSimilarOffers} from './similar-elements.js';

const offers = createSimilarOffers(1);
renderSimilarOffers(offers);
