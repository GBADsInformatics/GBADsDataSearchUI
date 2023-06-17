// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import FAQ from './pages/Faq';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/faq" element={<FAQ />} />
       </Routes>
    </>
 );
};

export default App;