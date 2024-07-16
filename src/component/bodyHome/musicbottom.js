
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { RxSpeakerLoud } from "react-icons/rx";

const MusicBottom = ({ hidden, currenbuttonPlay, imgUrl, music, preMusic, play, pauseMp3, playMp3, music1, nextMusic, changeTime, currentime, duration, changeValue }) => {
    return (
        <>
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
                            {play ? <FaRegPauseCircle onClick={() => pauseMp3(currenbuttonPlay)} className='mx-[10px] cursor-pointer' /> : <FaRegCirclePlay onClick={() => playMp3(music[currenbuttonPlay].link, currenbuttonPlay)} className='mx-[10px] cursor-pointer' />}
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
export default MusicBottom;