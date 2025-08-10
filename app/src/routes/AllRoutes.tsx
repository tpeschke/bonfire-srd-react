import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChapterDisplay from "../pages/chapterDisplay/ChapterDisplay";

export default function AllRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='player/:chapterNumber' element={<ChapterDisplay />} />
        </Routes>
    )
}