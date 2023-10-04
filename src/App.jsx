import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./routes/Base";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
