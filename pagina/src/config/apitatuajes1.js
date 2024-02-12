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
  
  const collectionName = "dbdmgftatuajedmgf";
  
  export const saveTattoDmgf = (newLink) =>
    addDoc(collection(db, collectionName), newLink);
  
  export const updateTattoDmgf = (id, updatedFields) =>
    updateDoc(doc(db, collectionName, id), updatedFields);
  
  export const onGetSongs = (callback) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
  };
  
  export const getTattosDmgf = () => getDocs(collection(db, collectionName));
  
  export const deleteTattoDmgf = (id) => deleteDoc(doc(db, collectionName, id));
  
  export const getTattoDmgf = (id) => getDoc(doc(db, collectionName, id));