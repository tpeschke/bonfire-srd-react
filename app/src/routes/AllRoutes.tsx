import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChapterDisplay from "../pages/chapterDisplay/ChapterDisplay";
import Loading from "../components/loading/Loading";

export default function AllRoutes() {
    return (
        <Routes>
            <Route index element={
                <Loading>
                    <Home />
                </Loading>
            } />
            <Route path='player/:chapterNumber' element={
                <Loading>
                    <ChapterDisplay />
                </Loading>
            } />
        </Routes>
    )
}