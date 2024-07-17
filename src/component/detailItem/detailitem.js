import { useOutletContext, useParams } from "react-router-dom"
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
export default function DetailItem() {
    const { id } = useParams();
    const data = useOutletContext();
    const dataMusicTag = data.music.filter(item => parseInt(item.tag) === parseInt(id));
    const dataEmpty = ['', '', ''];
    console.log(dataMusicTag);
    return (
        <>
            <div className='flex items-center'>
                {data.tags[id - 1] ?
                    (
                        <>
                            <div className='flex justify-center'>
                                <img className=" h-[150px] w-[150px] rounded-[10px]" src={data.imgUrlTag[data.tags[id - 1].title]} alt='avt' />
                            </div>
                            <div className="ml-[20px]">
                                <div className='text-[26px] mb-[10px] w-[200px] h-[50px] text-[#00ADEF] font-bold '>
                                    {data.tags[id - 1].title}
                                </div>
                                <div className='text-[white] w-[250px] h-[30px]'>{data.tags[id - 1].description}</div>
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
                                <div className='text-[white] w-[250px] h-[30px] bg-[#B5B5B5] rounded-[10px]' />
                            </div>
                        </>

                    )
                }
            </div>
            <div className='text-[26px] font-bold my-[20px]'>
                DANH SÁCH BÀI HÁT
            </div>

            <div className="pb-[120px]">
                {dataMusicTag.length === 0 ?
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
                        (dataMusicTag.map((item, index) => {
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