import { Link, useOutletContext } from 'react-router-dom';
export default function BodyMusic() {
    const data = useOutletContext();
    return (
        <>
            <div className='pb-[80px]'>
                <div className='text-[32px] font-bold mb-[20px]'>
                    DANH MỤC NỔI BẬT
                </div>
                <div className='flex flex-wrap'>
                    {data.alltags.map((item, index) => {
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
                    })}
                </div>
            </div>
        </>
    )
}