import { db } from './Index.js';

import { collection, getDocs } from 'firebase/firestore';

const animeRef = collection(db, 'anime');

class animeService {
  getItem = () => {
    return getDocs(animeRef)
  };
};

export default new animeService();