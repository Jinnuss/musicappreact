import { Link, useOutletContext } from 'react-router-dom';
export default function BodySingers() {
    const data = useOutletContext();
    const dataEmpty = ['', '', '', '', '', '', '', ''];
    return (
        <>
            <div className='pb-[80px]'>
                <div className='text-[32px] font-bold mb-[20px]'>
                    DANH MỤC CA SĨ
                </div>
                <div className='flex flex-wrap'>
                    {data.singersall.length === 0 ?
                        (
                            dataEmpty.map((item, index) => {
                                return (
                                    <div key={index} className='mb-[40px] mr-[20px]'>
                                        <div className='flex justify-center'>
                                            <div className=" h-[200px] w-[200px]  rounded-[10px] bg-[#B5B5B5]" />
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='text-[20px] bg-[#B5B5B5]  w-[200px] h-[20px]  rounded-[10px] my-[10px]' />
                                        </div>
                                    </div>
                                )
                            })
                        )
                        :
                        (
                            data.singersall.map((item, index) => {
                                return (
                                    <div key={index} className='mb-[40px] mr-[20px]'>
                                        <Link to={`/itemSinger/${item.idSinger}`} className='flex justify-center'>
                                            <img className=" h-[200px] w-[200px]  rounded-[10px]" src={data.imgUrlSingers[item.singer]} alt='avt' />
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