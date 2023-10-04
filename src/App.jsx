import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./routes/Base";
import Home from "./routes/Home";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
