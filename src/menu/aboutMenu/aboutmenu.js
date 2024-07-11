import { Link } from 'react-router-dom';
import logo from '../../assets/images/Trung-logo-1.jpg';
export default function AboutMenu() {
    return (
        <>
            <div className='fixed top-0 bottom-0 w-[240px] bg-[#212121]'>
                <Link to={'/'} className='h-[100px] bg-[#1C1C1C] text-[20px] font-bold px-[20px] py-[30px] text-[#00ADEF] flex items-center'>
                    <img className='w-[50px] h-[50px] mr-[10px] rounded-[50%]' src={logo} alt='logo' /> Music Trung
                </Link>
                <ul className='text-[20px] font-bold px-[20px] py-[30px] text-[white]'>
                    <li className='mb-[30px]'>
                        <Link to={'/'}>Trang chủ</Link>
                    </li>
                    <li className='mb-[30px]'>
                        <Link to={'/musics'}>Danh mục bài hát</Link>
                    </li>
                    <li className='mb-[30px]'>
                        <Link to={'/singers'}>Ca sĩ</Link>
                    </li>
                    <li className='mb-[30px]'>
                        <Link to={'/musicslike'}>Bài hát yêu thích</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}