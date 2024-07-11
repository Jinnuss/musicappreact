import demo from '../../assets/images/image.png';
import { FaRegCirclePlay } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import GetDataMusic from '../../helps/dataMusic';
import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from "firebase/storage";
import { dbStorage } from '../../firebase/firebase';
import { FaRegPauseCircle } from "react-icons/fa";
import GetTags from '../../helps/dataTags';
import GetSingers from '../../helps/dataSinger';
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { RxSpeakerLoud } from "react-icons/rx";

export default function BodyHome() {
    const [play, setPlay] = useState(false);
    const [currenbuttonPlay, setindex] = useState(null);
    const [music, setMusic] = useState([]);
    const [tags, setTags] = useState([]);
    const [hidden, sethidden] = useState(false);
    const [music1, setMusic1] = useState([]);
    const [time, setTime] = useState(0);
    const [currentime, setcurrenTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const db = dbStorage;
    // lấy data nhạc
    useEffect(() => {
        const dataMusic = async () => {
            try {
                const Musics = await GetDataMusic();
                const data = Musics.slice(0, 3);
                setMusic1([...data]);
                setMusic([...Musics]);
                return (Musics);
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        }
        dataMusic();
    }, []);
    // lấy data tag nổi bật
    useEffect(() => {
        const dataTags = async () => {
            try {
                const Tags = await GetTags();
                const data = Tags.slice(0, 4);
                setTags([...data]);
                return (data);
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        }
        dataTags();
    }, []);
    // console.log(tags);
    const [singers, setSingers] = useState([]);
    useEffect(() => {
        const dataSingers = async () => {
            try {
                const Singers = await GetSingers();
                const data = Singers.slice(0, 4);
                setSingers([...data]);
                return (data);
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        }
        dataSingers();
    }, []);
    // lấy data ca sĩ
    // Lấy mp3 trong firebase
    const [currenAudio, setAudio] = useState(null);
    const playMp3 = async (path, index) => {
        if (currenAudio) {
            currenAudio.pause();
        }
        sethidden(true);
        setPlay(true);
        setindex(index);
        const storageRef = ref(db, path);
        try {
            const url = await getDownloadURL(storageRef);
            const audio = new Audio(url);
            setAudio(audio);
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });
            audio.addEventListener('timeupdate', () => {
                setcurrenTime(audio.currentTime);
            });
            audio.play();
        } catch (error) {
            console.error('Error getting download URL', error);
        }
    };


    const pauseMp3 = async (path) => {
        currenAudio.currenTime = currentime;
        currenAudio.pause();
        setPlay(false);
    };

    // Lấy ảnh trong firebase
    const [imgUrl, setimgUrl] = useState([]);
    const [imgUrlTag, setimgUrlTag] = useState([]);
    const [imgUrlSingers, setimgUrlSingers] = useState([]);
    const fetchImage = async (imgPath) => {
        try {
            const imageRef = ref(db, imgPath);
            const url = await getDownloadURL(imageRef);
            return url;
        } catch (error) {
            console.error("Error fetching image:", error);
            return null;
        }
    };
    // ảnh nhạc
    useEffect(() => {
        const loadImages = async () => {
            const urls = {};
            for (const item of music) {
                const url = await fetchImage(item.img); // Assuming each item has an imagePath property
                if (url) {
                    urls[item.name] = url;
                }
            }
            setimgUrl(urls);
        };

        loadImages();
    }, [music]);
    // ảnh tags nổi bật
    useEffect(() => {
        const loadImages = async () => {
            const urls = {};
            for (const item of tags) {
                const url = await fetchImage(item.img); // Assuming each item has an imagePath property
                if (url) {
                    urls[item.title] = url;
                }
            }
            setimgUrlTag(urls);
        };
        loadImages();
    }, [tags]);
    // console.log(imgUrlTag);
    // ảnh ca sĩ
    useEffect(() => {
        const loadImages = async () => {
            const urls = {};
            for (const item of singers) {
                const url = await fetchImage(item.img); // Assuming each item has an imagePath property
                if (url) {
                    urls[item.singer] = url;
                }
            }
            setimgUrlSingers(urls);
        };
        loadImages();
    }, [singers]);

    // điều chỉnh âm lượng 
    const changeValue = (e) => {
        if (currenAudio) {
            currenAudio.volume = parseFloat(e.target.value) / 100;
        }
    }
    const changeTime = (e) => {
        if (currenAudio) {
            setcurrenTime(currenAudio.currenTime);
            currenAudio.currentTime = (parseFloat(e.target.value) / 100) * (currenAudio.duration);
        }
    }
    // chuyển bài
    const nextMusic = (currenbuttonPlay) => {
        if (currenbuttonPlay < (music.length - 1)) {
            playMp3(music[currenbuttonPlay + 1].link, currenbuttonPlay + 1);
        } else {
            alert('Hết bài r đại ca!');
        }
    }
    const preMusic = (currenbuttonPlay) => {
        if (currenbuttonPlay >= 1) {
            playMp3(music[currenbuttonPlay - 1].link, currenbuttonPlay - 1);
        } else {
            alert('Hết bài r đại ca!');
        }
    }
    // chuyển bài tự động



    return (
        <>
            <div className='flex justify-between mb-[40px]'>
                <div className='w-[49%] relative h-[360px] overflow-hidden rounded-[20px]'>
                    <img className='absolute z-[0] cover opacity-20' src={demo} alt='avt' />
                    <div className='relative z-[2] w-[70%] pt-[60px] pl-[30px]'>
                        <div className='text-[32px] font-bold mb-[10px]'>
                            Nhạc EDM
                        </div>
                        <div className=''>
                            Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                        </div>
                    </div>
                </div>
                <div className='w-[49%]'>
                    <div className='text-[32px] font-bold mb-[20px]'>
                        Nghe Nhiều
                    </div>
                    {music1.map((item, index) => {
                        return (
                            <div key={index} className='bg-[#212121] mb-[10px] p-[10px] rounded-[10px] flex items-center justify-between'>
                                <div className='flex'>
                                    <img className="w-[70px] mr-[20px] h-[70px] rounded-[10px]" src={imgUrl[item.name]} alt='avt' />
                                    <div>
                                        <div className='text-[20px] font-bold'>{item.name}</div>
                                        <div className='text-[20px] font-bold text-[#00ADEF]'>{item.singer}</div>
                                    </div>
                                </div>
                                <div className='flex text-[30px]'>
                                    {play && (currenbuttonPlay === index) ? <FaRegPauseCircle onClick={() => pauseMp3(index)} className='mx-[10px] cursor-pointer' /> : <FaRegCirclePlay onClick={() => playMp3(item.link, index)} className='mx-[10px] cursor-pointer' />}
                                    <SlLike />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mb-[20px]'>
                <div className='text-[32px] font-bold mb-[20px]'>
                    DANH MỤC NỔI BẬT
                </div>
                <div className='flex justify-between '>
                    {tags.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <div className='flex justify-center'>
                                    <img className=" h-[200px] w-[200px]  rounded-[10px]" src={imgUrlTag[item.title]} alt='avt' />
                                </div>
                                <div className='text-[20px] font-bold text-center'>
                                    {item.title}
                                </div>
                                <div className='text-[#6A6A6A]'>{item.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=''>
                <div className='text-[32px] font-bold mb-[20px]'>
                    CA SĨ NỔI BẬT
                </div>
                <div className='flex justify-between pb-[120px]'>
                    {singers.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <div className='flex justify-center pb-[20px]'>
                                    <img className="h-[200px] w-[200px]  rounded-[10px]" src={imgUrlSingers[item.singer]} alt='avt' />
                                </div>
                                <div className='text-[20px] font-bold text-center'>
                                    {item.singer}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* {hidden ? 'bg-[#1C1C1C] fixed bottom-0 left-0 right-0' : 'bg-[#1C1C1C] fixed bottom-0 left-0 right-0 hidden'} */}
            <div className={hidden ? 'bg-[#1C1C1C] fixed bottom-0 left-0 right-0' : 'bg-[#1C1C1C] fixed bottom-0 left-0 right-0 hidden'}>
                <div className='flex items-center justify-between px-[120px] py-[20px]'>
                    <div className='flex'>
                        <img className="w-[70px] mr-[20px] h-[70px] rounded-[10px]" src={currenbuttonPlay || (parseInt(currenbuttonPlay) >= 0) ? imgUrl[music[currenbuttonPlay].name] : ''} alt='avt' />
                        <div>
                            <div className='text-[20px] font-bold'>{currenbuttonPlay || (parseInt(currenbuttonPlay) >= 0) ? music[currenbuttonPlay].name : ''}</div>
                            <div className='text-[20px] font-bold text-[#00ADEF]'>{currenbuttonPlay || (parseInt(currenbuttonPlay) >= 0) ? music[currenbuttonPlay].singer : ''}</div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <div className='flex text-[40px] justify-center mb-[20px]'>
                            <BiSolidSkipPreviousCircle onClick={() => preMusic(currenbuttonPlay)} className='mx-[10px] cursor-pointer' />
                            {play ? <FaRegPauseCircle onClick={() => pauseMp3(currenbuttonPlay)} className='mx-[10px] cursor-pointer' /> : <FaRegCirclePlay onClick={() => playMp3(music1[currenbuttonPlay].link, currenbuttonPlay)} className='mx-[10px] cursor-pointer' />}
                            <BiSolidSkipNextCircle onClick={() => nextMusic(currenbuttonPlay)} className='mx-[10px] cursor-pointer' />
                        </div>
                        <div className='flex item-center pt-[4px] ml-[10px]'>
                            <input onChange={(event) => changeTime(event)} id="minmax-range" type="range" min="0" max="100" value={(parseFloat(currentime) / parseFloat(duration)) * 100} defaultValue={0} class="w-full h-2 bg-gray-200 rounded-lg  cursor-pointer dark:bg-gray-700" />
                        </div>
                    </div>
                    <div className='flex '>
                        <RxSpeakerLoud />
                        <div className='flex item-center pt-[4px] ml-[10px]'>
                            <input onChange={(event) => changeValue(event)} id="range" type="range" min="0" max="100" class="w-full h-2 rounded-lg cursor-pointer dark:bg-gray-700"></input>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}