import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Footer from "./components/Footer";
import { CharDataContext } from "./data/CharContextData";
import { MovieDataContext } from "./data/MoviesContextData";


const App = () => {
  return (
    <>
    <Header></Header>
    <MoviesDataProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Characters" element={<Characters/>}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/About" element={<About />}></Route>
          </Routes>
    </MoviesDataProvider>
      <Footer></Footer>
    </>
  );
}

export default App