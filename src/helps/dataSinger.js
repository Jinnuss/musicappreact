import { Getdb } from "../firebase/firebase";
export default async function GetSingers() {
    try {
        const data = await Getdb('/singers');
        const myArray = Object.keys(data).map(key => data[key]);
        return myArray;
    } catch (error) {
        console.error('Error:', error);
    }
};