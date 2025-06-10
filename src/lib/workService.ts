import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase'; // Your Firebase config and db instance
import { WorkItemData } from '../types/works'; // Your WorkItemData type

const WORKS_COLLECTION = 'works';

// Helper to add/update timestamps
const withTimestamps = (data: any) => ({
  ...data,
  updatedAt: serverTimestamp(),
  createdAt: data.createdAt || serverTimestamp(), // Keep original createdAt if it exists (for updates)
});

// Fetch all works
export const getWorks = async (): Promise<WorkItemData[]> => {
  const querySnapshot = await getDocs(collection(db, WORKS_COLLECTION));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as WorkItemData[];
};

// Add a new work
// The 'id' from WorkItemData will be used as the document ID in Firestore
export const addWork = async (workData: WorkItemData): Promise<void> => {
  if (!workData.id) {
    throw new Error('Work data must include an id to be used as the document ID.');
  }
  const workRef = doc(db, WORKS_COLLECTION, workData.id);
  // Separate id from the rest of the data to avoid storing it within the document fields as well
  const { id, ...dataToStore } = workData;
  await setDoc(workRef, withTimestamps(dataToStore));
};

// Update an existing work
export const updateWork = async (workId: string, workData: Partial<Omit<WorkItemData, 'id'>>): Promise<void> => {
  const workRef = doc(db, WORKS_COLLECTION, workId);
  await updateDoc(workRef, withTimestamps(workData));
};

// Delete a work
export const deleteWork = async (workId: string): Promise<void> => {
  const workRef = doc(db, WORKS_COLLECTION, workId);
  await deleteDoc(workRef);
};
