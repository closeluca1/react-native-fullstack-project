import { db } from './Index.js';

import { collection, getDocs } from 'firebase/firestore';

const movieAnimationRef = collection(db, 'movieAnimation');

class movieAnimationService {
  getItem = () => {
    return getDocs(movieAnimationRef)
  };
};

export default new movieAnimationService();