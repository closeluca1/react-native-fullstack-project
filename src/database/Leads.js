import { db } from './Index.js';

import { collection, addDoc } from 'firebase/firestore';

const LeadsRef = collection(db, 'leads');

class LeadService {
  createLead = (newLead) => {
    return addDoc(LeadsRef, newLead)
  }
}

export default new LeadService();