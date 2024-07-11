import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLx38wTWMLpSEug30DKVDXaDV54jgVuJ8",
    authDomain: "music-c1e11.firebaseapp.com",
    databaseURL: "https://music-c1e11-default-rtdb.firebaseio.com",
    projectId: "music-c1e11",
    storageBucket: "music-c1e11.appspot.com",
    messagingSenderId: "307225012457",
    appId: "1:307225012457:web:285c65925d9204f4942878",
    measurementId: "G-6KZ292V37S"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);
const dbStorage = getStorage(app);

export { dbFirebase, dbStorage };

export const fetchData = (db, path) => {
    return new Promise((resolve, reject) => {
        onValue(ref(db, path), (snapshot) => {
            const result = snapshot.val();
            if (result !== null) {
                resolve(result);
            } else {
                reject(new Error("No data found"));
            }
        }, (error) => {
            reject(error);
        });
    });
}
export const Getdb = async (path) => {
    try {
        const resultNew = await fetchData(dbFirebase, path);
        return resultNew;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}