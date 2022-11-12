// 레이아웃에서 쓸 css 
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';


import { DataProvider } from './Context/DataContext';
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import ProductDetail from './pages/ProductDetail';
import Login from './components/Login';
import Profile from './pages/Profile';
import FullPageScroll from './pages/fullPageScroll';

import Result from './Mbti/Result';
import Question from './Mbti/Question';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<FullPageScroll/>}></Route>
            <Route path='product/:id' element={<ProductDetail/>}> </Route>
            <Route path='loginform' element={<Login/>}></Route>
            <Route path='mypage' element={<Profile/>}></Route>
            <Route path='Match' element={<Question/>}></Route>
            <Route path='Result' element={<Result/>}></Route>
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
