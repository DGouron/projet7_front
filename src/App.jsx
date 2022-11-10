import { Route, Routes } from "react-router";
import "./App.css";
import HeaderBlock from "./components/layouts/header/HeaderBlock";
import Home from "./components/home/Home";
import NotFound from "./components/errors/NotFound";
import FooterBlock from "./components/layouts/footer/FooterBlock";
import House from "./components/house/House";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <HeaderBlock />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <FooterBlock />
    </div>
  );
}

export default App;
