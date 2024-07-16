import { Link, useOutletContext } from 'react-router-dom';
export default function BodyMusic() {
    const data = useOutletContext();
    const dataEmpty = ['', '', '', '', '', '', '', ''];
    return (
        <>
            <div className='pb-[80px]'>
                <div className='text-[32px] font-bold mb-[20px]'>
                    DANH MỤC NỔI BẬT
                </div>
                <div className='flex flex-wrap'>
                    {data.alltags.length === 0 ?
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
                                        <div className='text-[#6A6A6A] bg-[#B5B5B5] w-[230px] h-[20px] rounded-[10px] ' />
                                    </div>
                                )
                            })
                        )
                        :
                        (
                            data.alltags.map((item, index) => {
                                return (
                                    <div key={index} className='mb-[40px] mr-[20px]'>
                                        <Link to={`/${item.tag}`} className='flex justify-center'>
                                            <img className=" h-[200px] w-[200px]  rounded-[10px]" src={data.imgUrlTag[item.title]} alt='avt' />
                                        </Link>
                                        <div className='text-[20px] font-bold text-center'>
                                            {item.title}
                                        </div>
                                        <div className='text-[#6A6A6A]'>{item.description}</div>
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