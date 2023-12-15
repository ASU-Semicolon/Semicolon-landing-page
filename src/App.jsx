import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CommitteesProvider } from "./contexts/committees.context.jsx";
import Base from "./routes/Base";
import Committee from "./routes/Committee";
import Form from "./routes/Form";
import Home from "./routes/Home";

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
                    </Route>
                </Routes>
            </CommitteesProvider>
        </HashRouter>
    );
}
