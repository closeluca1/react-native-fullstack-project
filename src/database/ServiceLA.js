import { db } from './Index.js';

import { collection, getDocs } from 'firebase/firestore';

const movieLiveActionRef = collection(db, 'movieLiveAction');

class movieLiveActionService {
  getItem = () => {
    return getDocs(movieLiveActionRef)
  };
};

export default new movieLiveActionService();