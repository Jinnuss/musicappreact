import demo from '../../assets/images/image.png';
import { FaRegCirclePlay } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { FaRegPauseCircle } from "react-icons/fa";
import { Link, useOutletContext } from 'react-router-dom';

export default function BodyHome() {
    const data = useOutletContext();
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
                    {data.music1.map((item, index) => {
                        return (
                            <div key={index} className='bg-[#212121] mb-[10px] p-[10px] rounded-[10px] flex items-center justify-between'>
                                <div className='flex'>
                                    <img className="w-[70px] mr-[20px] h-[70px] rounded-[10px]" src={data.imgUrl[item.name]} alt='avt' />
                                    <div>
                                        <div className='text-[20px] font-bold'>{item.name}</div>
                                        <div className='text-[20px] font-bold text-[#00ADEF]'>{item.singer}</div>
                                    </div>
                                </div>
                                <div className='flex text-[30px]'>
                                    {data.play && (data.currenbuttonPlay === index) ? <FaRegPauseCircle onClick={() => data.pauseMp3(index)} className='mx-[10px] cursor-pointer text-[#00ADEF]' /> : <FaRegCirclePlay onClick={() => data.playMp3(item.link, index)} className='mx-[10px] cursor-pointer' />}
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
                    {data.tags.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <Link to={`/${item.tag}`} className='flex justify-center'>
                                    <img className=" h-[200px] w-[200px]  rounded-[10px]" src={data.imgUrlTag[item.title]} alt='avt' />
                                </Link>
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
                    {data.singers.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <div className='flex justify-center pb-[20px]'>
                                    <img className="h-[200px] w-[200px]  rounded-[10px]" src={data.imgUrlSingers[item.singer]} alt='avt' />
                                </div>
                                <div className='text-[20px] font-bold text-center'>
                                    {item.singer}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}