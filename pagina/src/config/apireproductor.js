import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "./config";
  
  const collectionName = "dbdmgfsongs";
  
  export const saveSong = (newLink) =>
    addDoc(collection(db, collectionName), newLink);
  
  export const updateSong = (id, updatedFields) =>
    updateDoc(doc(db, collectionName, id), updatedFields);
  
  export const onGetSongs = (callback) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
  };
  
  export const getSongs = () => getDocs(collection(db, collectionName));
  
  export const deleteSong = (id) => deleteDoc(doc(db, collectionName, id));
  
  export const getSong = (id) => getDoc(doc(db, collectionName, id));