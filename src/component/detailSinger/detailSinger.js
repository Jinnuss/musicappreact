import { useOutletContext, useParams } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
export default function DetailSinger() {
    const { idSinger } = useParams();
    const data = useOutletContext();
    const dataMusicSinger = data.music.filter((item) => item.singer === data.singersall[parseInt(idSinger) - 1].singer);
    const dataEmpty = ['', '', ''];
    return (
        <>
            <div className='flex items-center'>
                {data.singersall[parseInt(idSinger) - 1] ?
                    (
                        <>
                            <div className='flex justify-center'>
                                <img className=" h-[150px] w-[150px] rounded-[10px]" src={data.imgUrlSingers[data.singersall[parseInt(idSinger) - 1].singer]} alt='avt' />
                            </div>
                            <div className="ml-[20px]">
                                <div className='text-[26px] mb-[10px] w-[200px] h-[50px] text-[#00ADEF] font-bold '>
                                    {data.singersall[parseInt(idSinger) - 1].singer}
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className='flex justify-center'>
                                <div className=" h-[150px] w-[150px] rounded-[10px] bg-[#B5B5B5]" />
                            </div>
                            <div className="ml-[20px]">
                                <div className='text-[26px] mb-[10px] w-[200px] h-[50px] text-[#00ADEF] rounded-[10px] font-bold  bg-[#B5B5B5]' />
                            </div>
                        </>

                    )
                }
            </div>
            <div className='text-[26px] font-bold my-[20px]'>
                DANH SÁCH BÀI HÁT
            </div>
            <div className="pb-[120px]">
                {dataMusicSinger.length === 0 ?
                    (
                        (dataEmpty.map((item, index) => {
                            return (
                                <div key={index} className='bg-[#212121] mb-[10px] p-[10px] rounded-[10px] flex items-center justify-between'>
                                    <div className='flex'>
                                        <div className="w-[70px] mr-[20px] h-[70px] rounded-[10px] bg-[#B5B5B5]" />
                                        <div>
                                            <div className='text-[20px] font-bold w-[200px] mb-[10px] h-[30px] bg-[#B5B5B5] rounded-[10px]' />
                                            <div className='text-[20px] font-bold text-[#00ADEF] w-[200px] h-[30px] bg-[#B5B5B5] rounded-[10px]' />
                                        </div>
                                    </div>
                                    <div className='flex text-[30px]'>
                                        <div className='mx-[10px] w-[40px] h-[40px] bg-[#B5B5B5] rounded-[5px]' />
                                        <div className=' w-[40px] h-[40px] bg-[#B5B5B5] rounded-[5px]' />
                                    </div>
                                </div>
                            )
                        })
                        )
                    ) :
                    (
                        (dataMusicSinger.map((item, index) => {
                            return (
                                <div key={index} className='card1 mb-[10px] p-[10px] rounded-[10px] flex items-center justify-between'>
                                    <div className='flex'>
                                        <img className="w-[70px] mr-[20px] h-[70px] rounded-[10px]" src={data.imgUrl[item.name]} alt='avt' />
                                        <div>
                                            <div className='text-[20px] font-bold'>{item.name}</div>
                                            <div className='text-[20px] font-bold text-[#00ADEF]'>{item.singer}</div>
                                        </div>
                                    </div>
                                    <div className='flex text-[30px]'>
                                        {data.play && (item.name === data.music[data.currenbuttonPlay].name) ? <FaRegPauseCircle onClick={() => data.pauseMp3()} className='mx-[10px] cursor-pointer text-[#00ADEF]' /> : <FaRegCirclePlay onClick={() => data.playMp3(item.link, item.id - 1)} className='mx-[10px] cursor-pointer' />}
                                        {item.like ? <AiFillLike onClick={() => data.handlelike(item)} /> : <AiOutlineLike onClick={() => data.handlelike(item)} />}
                                    </div>
                                </div>
                            )
                        }))
                    )
                }
            </div>
        </>
    )
}