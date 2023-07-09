import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import GlobalStyle from './components/common/GlobalStyle';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
