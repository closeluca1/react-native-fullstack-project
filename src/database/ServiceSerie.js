import { db } from './Index.js';

import { collection, getDocs } from 'firebase/firestore';

const SerieRef = collection(db, 'Serie');

class SerieService {
  getItem = () => {
    return getDocs(SerieRef)
  };
};

export default new SerieService();