import { useOutletContext, useParams } from "react-router-dom"
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
export default function DetailItem() {
    const { id } = useParams();
    const data = useOutletContext();
    const dataMusicTag = data.music.filter(item => parseInt(item.tag) === parseInt(id));
    console.log(dataMusicTag);
    return (
        <>
            <div className='flex items-center'>
                <div className='flex justify-center'>
                    <img className=" h-[150px] w-[150px] rounded-[10px]" src={data.tags[id - 1] ? data.imgUrlTag[data.tags[id - 1].title] : 'Ảnh'} alt='avt' />
                </div>
                <div className="ml-[20px]">
                    <div className='text-[26px] text-[#00ADEF] font-bold '>
                        {data.tags[id - 1] ? data.tags[id - 1].title : 'title'}
                    </div>
                    <div className='text-[white]'>{data.tags[id - 1] ? data.tags[id - 1].description : 'description'}</div>
                </div>
            </div>
            <div className='text-[26px] font-bold my-[20px]'>
                DANH SÁCH BÀI HÁT
            </div>
            <div className="pb-[120px]">
                {dataMusicTag.map((item, index) => {
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
                                {data.play && (item.name === data.music[data.currenbuttonPlay].name) ? <FaRegPauseCircle onClick={() => data.pauseMp3()} className='mx-[10px] cursor-pointer text-[#00ADEF]' /> : <FaRegCirclePlay onClick={() => data.playMp3(item.link, item.id - 1)} className='mx-[10px] cursor-pointer' />}
                                <SlLike />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}