import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/pages/home/Home";
import House from "./components/pages/house/House";
import About from "./components/pages/about/About";
import NotFound from "./components/pages/errors/NotFound";
import HeaderBlock from "./components/layouts/header/HeaderBlock";
import FooterBlock from "./components/layouts/footer/FooterBlock";

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
