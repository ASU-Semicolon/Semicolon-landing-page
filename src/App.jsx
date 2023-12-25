import { HashRouter, Route, Routes } from "react-router-dom";
import { CommitteesProvider } from "./contexts/committees.context.jsx";
import Base from "./routes/Base";
import Committee from "./routes/Committee";
import Form from "./routes/Form";
import Hackathon from "./routes/Hackathon.jsx";
import Home from "./routes/Home";
import HackathonField from "./routes/HackathonField.jsx";
import "./App.css";

export default function App() {
    return (
        <HashRouter>
            <CommitteesProvider>
                <Routes>
                    <Route path="/" element={<Base />}>
                        <Route index element={<Home />} />
                        <Route
                            path=":committeeName"
                            element={<Committee />}
                        ></Route>
                        <Route path="/form" element={<Form />}></Route>
                        <Route path="hackathon" element={<Hackathon />} />
                        <Route
                            path="hackathon/:fieldName"
                            element={<HackathonField />}
                        ></Route>
                    </Route>
                </Routes>
            </CommitteesProvider>
        </HashRouter>
    );
}
