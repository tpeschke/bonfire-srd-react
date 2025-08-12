import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChapterDisplay from "../pages/chapterDisplay/ChapterDisplay";
import Loading from "../components/loading/Loading";

interface Props {
    pathname: string
}

export default function AllRoutes({ pathname }: Props) {
    return (
        <Routes>
            <Route index element={
                <Loading>
                    <Home />
                </Loading>
            } />
            <Route path='player/:chapterNumber' element={
                <Loading>
                    <ChapterDisplay pathname={pathname} />
                </Loading>
            } />
            <Route path='rules/:chapterNumber' element={
                <Loading>
                    <ChapterDisplay pathname={pathname} />
                </Loading>
            } />
        </Routes>
    )
}