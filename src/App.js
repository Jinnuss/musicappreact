import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/layout';
import Musicslike from './menu/MusicsLike/musicslike';
import Musics from './menu/Musics/musics';
import Singers from './menu/Singers/singers';
import Home from './menu/Home/home';
import DetailItem from './component/detailItem/detailitem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:id' element={<DetailItem />} />
          <Route path='/musics' element={<Musics />} />
          <Route path='/musicslike' element={<Musicslike />} />
          <Route path='/singers' element={<Singers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
