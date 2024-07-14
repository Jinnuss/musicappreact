import { Outlet } from "react-router-dom";
import AboutMenu from "../../menu/aboutMenu/aboutmenu";
import Search from "../search/search";
import MusicBottom from "../bodyHome/musicbottom";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { dbStorage } from "../../firebase/firebase";
import GetDataMusic from "../../helps/dataMusic";
import GetTags from "../../helps/dataTags";
import GetSingers from "../../helps/dataSinger";

export default function Layout() {
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

    return (
        <>
            <div className="relative min-h-[100vh]  px-[120px] bg-[#292929] text-[white]">
                <AboutMenu />
                <div className="ml-[270px] pt-[127px] w-[80%]">
                    <Search />
                    <Outlet context={{ hidden, currenbuttonPlay, imgUrl, music, preMusic, play, pauseMp3, playMp3, music1, nextMusic, changeTime, currentime, duration, changeValue, tags, imgUrlSingers, singers, imgUrlTag }} />
                </div>
                <MusicBottom hidden={hidden} currenbuttonPlay={currenbuttonPlay} imgUrl={imgUrl} music={music} preMusic={preMusic} play={play} playMp3={playMp3} pauseMp3={pauseMp3}
                    nextMusic={nextMusic} music1={music1} changeTime={changeTime} currentime={currentime} duration={duration} changeValue={changeValue}
                />
            </div>
        </>
    )
}