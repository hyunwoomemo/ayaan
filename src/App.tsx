import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Portfolio from './pages/Portfolio';
import GlobalStyle from './components/common/GlobalStyle';
import { RecoilRoot } from 'recoil';
import Image from './pages/Image';

function App() {

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />}></Route>
          <Route path='/image' element={<Image />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
