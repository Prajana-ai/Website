import { collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

const CREATORS_COLLECTION = 'creators';

export interface CreatorData {
    id: string;
    name: string;
    bio?: string;
    imageUrl?: string;
    socialLinks?: {
        twitter?: string;
        github?: string;
        website?: string;
    };
    createdAt?: any;
    updatedAt?: any;
}

// Helper to add/update timestamps
const withTimestamps = (data: any) => ({
    ...data,
    updatedAt: serverTimestamp(),
    createdAt: data.createdAt || serverTimestamp(),
});

// Fetch all creators
export const getCreators = async (): Promise<CreatorData[]> => {
    const querySnapshot = await getDocs(collection(db, CREATORS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as CreatorData[];
};

// Fetch a single creator
export const getCreator = async (id: string): Promise<CreatorData | null> => {
    const creatorRef = doc(db, CREATORS_COLLECTION, id);
    const docSnap = await getDoc(creatorRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as CreatorData;
    }
    return null;
};

// Add a new creator
export const addCreator = async (creatorData: CreatorData): Promise<void> => {
    if (!creatorData.id) {
        throw new Error('Creator data must include an id to be used as the document ID.');
    }
    const creatorRef = doc(db, CREATORS_COLLECTION, creatorData.id);
    const { id, ...dataToStore } = creatorData;
    await setDoc(creatorRef, withTimestamps(dataToStore));
};

// Update an existing creator
export const updateCreator = async (creatorId: string, creatorData: Partial<Omit<CreatorData, 'id'>>): Promise<void> => {
    const creatorRef = doc(db, CREATORS_COLLECTION, creatorId);
    await updateDoc(creatorRef, withTimestamps(creatorData));
};

// Delete a creator
export const deleteCreator = async (creatorId: string): Promise<void> => {
    const creatorRef = doc(db, CREATORS_COLLECTION, creatorId);
    await deleteDoc(creatorRef);
};
