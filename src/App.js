import logo from './logo.svg';
import './App.css';
import TopArtists from './components/TopArtists';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HamburgerMenu from './components/HamburgerMenu';
import ArtistDetail from './components/ArtistDetail';

function App() {

  
  return (
    <>
      <Router>
        <HamburgerMenu />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<TopArtists />}></Route>
            <Route path="/artistDetail" element={<ArtistDetail />}></Route>
          </Routes> 
        </div>
      </Router>
    </>
  );
}

export default App;
