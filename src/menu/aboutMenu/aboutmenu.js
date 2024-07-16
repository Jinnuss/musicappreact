import { Link, NavLink } from 'react-router-dom';
import MusicApp from '../../assets/images/Trung-logo-1.jpg';
export default function AboutMenu() {
    return (
        <>
            <div className='fixed top-0 bottom-0 w-[240px] bg-[#212121]'>
                <Link to={'/'} className='h-[100px] bg-[#1C1C1C] text-[20px] font-bold px-[20px] py-[30px] text-[#00ADEF] flex items-center'>
                    <img className='w-[50px] h-[50px] mr-[10px] rounded-[50%]' src={MusicApp} alt='logo' /> Music Trung
                </Link>
                <ul className='text-[20px] font-bold px-[20px] py-[30px] text-[white]'>
                    <li className='mb-[30px]'>
                        <NavLink to={'/'}>Trang chủ</NavLink>
                    </li>
                    <li className='mb-[30px]'>
                        <NavLink to={'/musics'}>Danh mục bài hát</NavLink>
                    </li>
                    <li className='mb-[30px]'>
                        <NavLink to={'/singers'}>Ca sĩ</NavLink>
                    </li>
                    <li className='mb-[30px]'>
                        <NavLink to={'/musicslike'}>Bài hát yêu thích</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}