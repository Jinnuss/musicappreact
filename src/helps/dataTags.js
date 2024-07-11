import { Getdb } from "../firebase/firebase";
export default async function GetTags() {
    try {
        const data = await Getdb('/tagmusic');
        const myArray = Object.keys(data).map(key => data[key]);
        return myArray;
    } catch (error) {
        console.error('Error:', error);
    }
};