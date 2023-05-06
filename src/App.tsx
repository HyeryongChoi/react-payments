import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { AliasAddition } from './pages/AliasAddition';
import { ScrollToTop } from './components/etc/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-alias' element={<AliasAddition />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate replace to='/404' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
