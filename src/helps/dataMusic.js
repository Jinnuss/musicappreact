import { Getdb } from "../firebase/firebase";
export default async function GetDataMusic() {
    try {
        const data = await Getdb('/musicslike');
        const myArray = Object.keys(data).map(key => data[key]);
        return myArray;
    } catch (error) {
        console.error('Error:', error);
    }
};