// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import FAQ from './pages/Faq';
import Footer from './components/Footer';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/search" element={<Home />} />
          <Route path="/search/query/data" element={<Search />} />
          <Route path="/search/query/literature" element={<Search />} />
          <Route path="/search/query/query" element={<Search />} />
          <Route path="/search/faq" element={<FAQ />} />
       </Routes>
       <Footer></Footer>
    </>
 );
};

export default App;