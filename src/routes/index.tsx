import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Weather from "@/pages/Weather";
import AppLayout from "@/layout";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout chidlren={<Weather />} />} />
            </Routes>
        </Router>
    )
};

export default AppRouter;