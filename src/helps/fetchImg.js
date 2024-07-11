import { ref, getDownloadURL } from "firebase/storage";
import { dbStorage } from "../firebase/firebase";
const FetchImage = async (imagePath) => {
    const db = dbStorage;
    try {
        const imageRef = ref(db, imagePath);
        const url = await getDownloadURL(imageRef);
        return url;
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
};
export default FetchImage;
