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
  
  const collectionName = "dbdmgftatuajecima";
  
  export const saveTattoCima = (newLink) =>
    addDoc(collection(db, collectionName), newLink);
  
  export const updateTattocima = (id, updatedFields) =>
    updateDoc(doc(db, collectionName, id), updatedFields);
  
  export const onGetSongs = (callback) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
  };
  
  export const getTattosCima = () => getDocs(collection(db, collectionName));
  
  export const deleteTattoCima = (id) => deleteDoc(doc(db, collectionName, id));
  
  export const getTattoCima = (id) => getDoc(doc(db, collectionName, id));