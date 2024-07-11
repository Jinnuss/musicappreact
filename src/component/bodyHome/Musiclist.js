import { useEffect, useState } from "react";
import FetchImage from "../../helps/fetchImg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";

const MusicList = (music1) => {
    const dataMusic = [music1];
    const [imageUrls, setImageUrls] = useState('');
    useEffect(() => {
        const loadImages = async () => {
            const urls = {};
            for (const item of music1) {
                const url = await FetchImage(item.imagePath); // Assuming each item has an imagePath property
                if (url) {
                    urls[item.name] = url;
                }
            }
            setImageUrls(urls);
        };
        loadImages();
    }, [music1]);
    return (
        <>
            {dataMusic.map((item, index) => {
                return (
                    <div key={index} className='bg-[#212121] mb-[10px] p-[10px] rounded-[10px] flex items-center justify-between'>
                        <div className='flex'>
                            <img className="w-[70px] mr-[20px] h-[70px] rounded-[10px]" src={imageUrls[item.name]} alt='avt' />
                            <div>
                                <div className='text-[20px] font-bold'>{item.name}</div>
                                <div>Lượt nghe: 24.5000</div>
                            </div>
                        </div>
                        <div className='flex text-[30px]'>
                            <FaRegCirclePlay className='mx-[10px]' />
                            <SlLike />
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default MusicList;