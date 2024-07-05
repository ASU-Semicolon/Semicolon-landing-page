import { HashRouter, Route, Routes } from "react-router-dom";
import { CommitteesProvider } from "./contexts/committees.context.jsx";
import Base from "./routes/Base";
import Committee from "./routes/Committee";
import Form from "./routes/Form";
import Event from "./routes/Event.jsx";
import Home from "./routes/Home";
import HackathonField from "./routes/HackathonField.jsx";
import WorkshopField from "./routes/WorkshopField.jsx";
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
                        <Route path="/form/:formRoute" element={<Form />}></Route>
                        <Route path="event" element={<Event />} />
                        <Route
                            path="workshop/:fieldName"
                            element={<WorkshopField />}
                        ></Route>
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
