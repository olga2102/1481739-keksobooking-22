import {createSimilarOffers} from './data.js';
import {renderSimilarOffers} from './similar-elements.js';

const offersData = createSimilarOffers(1);
renderSimilarOffers(offersData);
