import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc, serverTimestamp, query, where, limit } from 'firebase/firestore';
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

// Fetch a single work by its appId (the slug used in the URL)
export const getWorkByAppId = async (appId: string): Promise<WorkItemData | null> => {
  const q = query(collection(db, WORKS_COLLECTION), where("appId", "==", appId), limit(1));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const fetchedDoc = querySnapshot.docs[0];
  return {
    id: fetchedDoc.id,
    ...fetchedDoc.data()
  } as WorkItemData;
};

// Add a new work
export const addWork = async (workData: WorkItemData): Promise<void> => {
  if (!workData.id) {
    throw new Error('Work data must include an id to be used as the document ID.');
  }
  const workRef = doc(db, WORKS_COLLECTION, workData.id);
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
