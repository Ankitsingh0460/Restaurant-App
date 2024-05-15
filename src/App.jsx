import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"
import Menu from "./pages/Menu.jsx";
import PageNotFound from "./pages/PageNotFound.jsx"




function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
