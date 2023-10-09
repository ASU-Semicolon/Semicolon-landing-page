import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./routes/Base";
import Home from "./routes/Home";
import Committee from "./routes/Committee";
import Form from "./routes/Form";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />} />
                    <Route
                        path=":committeeName"
                        element={<Committee />}
                    ></Route>
                    <Route path="/form" element={<Form />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
