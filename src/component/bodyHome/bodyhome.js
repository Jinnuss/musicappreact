import demo from '../../assets/images/image.png';
import { FaRegCirclePlay } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegPauseCircle } from "react-icons/fa";
import { Link, useOutletContext } from 'react-router-dom';

export default function BodyHome() {
    const data = useOutletContext();
    const dataEmpty = ['', '', ''];
    const dataEmpty2 = ['', '', '', ''];
    return (
        <>
            <div className='flex justify-between mb-[40px]'>
                <div className='itemhome w-[49%] relative h-[360px] overflow-hidden rounded-[20px]'>
                    <img className='absolute z-[0] cover opacity-20' src={demo} alt='avt' />
                    <div className='relative z-[2] w-[70%] pt-[60px] pl-[30px]'>
                        <div className='flex justify-center'>
                            <div className='text-[32px] font-bold'>
                                TỔNG HỢP NHỮNG CA KHÚC HOT NHẤT NĂM 2024
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-[49%]'>
                    <div className='text-[32px] font-bold mb-[15px]'>
                        Nghe Nhiều
                    </div>
                    {
                        data.music1.length === 0 ?
                            (
                                dataEmpty.map((item, index) => {
                                    return (
                                        <div key={index} className=' bg-[#212121] mb-[10px] p-[10px] rounded-[10px] flex items-center justify-between'>
                                            <div className='flex'>
                                                <div className=" h-[70px] w-[70px] rounded-[10px] bg-[#B5B5B5]" />
                                                <div>
                                                    <div className='text-[20px] w-[200px] h-[30px] mb-[5px] font-bold bg-[#B5B5B5] ml-[10px] rounded-[5px]' />
                                                    <div className='text-[20px] w-[200px] h-[30px] font-bold text-[#00ADEF] bg-[#B5B5B5] ml-[10px] rounded-[5px]' />
                                                </div>
                                            </div>
                                            <div className='flex text-[30px]'>
                                                <div className='mx-[10px] w-[40px] h-[40px] bg-[#B5B5B5] rounded-[50%]' />
                                                <div className=' w-[40px] h-[40px] bg-[#B5B5B5] rounded-[50%]' />
                                            </div>
                                        </div>
                                    )
                                })
                            )
                            :
                            (
                                data.music1.map((item, index) => {
                                    return (
                                        <div key={index} className='card1 mb-[8px] p-[10px] rounded-[10px] flex items-center justify-between'>
                                            <div className='flex'>
                                                <img className="w-[70px] mr-[20px] h-[70px] rounded-[10px]" src={data.imgUrl[item.name]} alt='avt' />
                                                <div>
                                                    <div className='text-[20px] font-bold'>{item.name}</div>
                                                    <div className='text-[20px] font-bold text-[#00ADEF]'>{item.singer}</div>
                                                </div>
                                            </div>
                                            <div className='flex text-[30px]'>
                                                {data.play && (data.currenbuttonPlay === index) ? <FaRegPauseCircle onClick={() => data.pauseMp3(index)} className='mx-[10px] cursor-pointer text-[#00ADEF]' /> : <FaRegCirclePlay onClick={() => data.playMp3(item.link, index)} className='mx-[10px] cursor-pointer' />}
                                                {item.like ? <AiFillLike onClick={() => data.handlelike(item)} /> : <AiOutlineLike onClick={() => data.handlelike(item)} />}
                                            </div>
                                        </div>
                                    )
                                })
                            )
                    }
                </div>
            </div>
            <div className='mb-[20px]'>
                <div className='text-[32px] font-bold mb-[20px]'>
                    DANH MỤC NỔI BẬT
                </div>
                <div className='flex justify-between '>
                    {
                        data.tags.length === 0 ?
                            (
                                dataEmpty2.map((item, index) => {
                                    return (
                                        <div key={index} className=''>
                                            <div className='flex justify-center'>
                                                <div className=" h-[200px] w-[200px] bg-[#B5B5B5] rounded-[10px]" />
                                            </div>
                                            <div className='text-[20px] font-bold w-[200px] mt-[5px] h-[25px] bg-[#B5B5B5] rounded-[10px]' />
                                            <div className='text-[20px] font-bold mt-[5px] w-[200px] h-[25px] bg-[#B5B5B5] rounded-[10px]' />
                                        </div>
                                    )
                                })
                            )
                            :
                            (
                                data.tags.map((item, index) => {
                                    return (
                                        <div key={index} className='card'>
                                            <Link to={`/${item.tag}`} className='flex justify-center'>
                                                <img className=" h-[200px] w-[200px]  rounded-[10px]" src={data.imgUrlTag[item.title]} alt='avt' />
                                            </Link>
                                            <div className='text-[20px] mt-[10px] font-bold text-center'>
                                                {item.title}
                                            </div>
                                            <div className='text-[#6A6A6A] text-[14px] text-center'>{item.description}</div>
                                        </div>
                                    )
                                })
                            )
                    }
                </div>
            </div>
            <div className=''>
                <div className='text-[32px] font-bold mb-[20px]'>
                    CA SĨ NỔI BẬT
                </div>
                <div className='flex justify-between pb-[120px]'>
                    {
                        data.singers.length === 0 ?
                            (
                                dataEmpty2.map((item, index) => {
                                    return (
                                        <div key={index} className=''>
                                            <div className='flex justify-center'>
                                                <div className=" h-[200px] w-[200px] bg-[#B5B5B5] rounded-[10px]" />
                                            </div>
                                            <div className='text-[20px] font-bold w-[200px] mt-[5px] h-[25px] bg-[#B5B5B5] rounded-[10px]' />
                                            <div className='text-[20px] font-bold mt-[5px] w-[200px] h-[25px] bg-[#B5B5B5] rounded-[10px]' />
                                        </div>
                                    )
                                })
                            )
                            :
                            (
                                data.singers.map((item, index) => {
                                    return (
                                        <div key={index} className='card'>
                                            <Link to={`/itemSinger/${item.idSinger}`} className='flex justify-center pb-[20px]'>
                                                <img className="h-[200px] w-[200px]  rounded-[10px]" src={data.imgUrlSingers[item.singer]} alt='avt' />
                                            </Link>
                                            <div className='text-[20px] font-bold text-center'>
                                                {item.singer}
                                            </div>
                                        </div>
                                    )
                                })
                            )
                    }
                </div>
            </div>
        </>
    )
}