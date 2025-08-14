import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChapterDisplay from "../pages/chapterDisplay/ChapterDisplay";
import Loading from "../components/loading/Loading";
import ChapterEdit from "../pages/chapterEdit/ChapterEdit";

interface Props {
    pathname: string,
    hash: string
}

export default function AllRoutes({ pathname, hash }: Props) {
    return (
        <Routes>
            <Route index element={
                <Loading>
                    <Home />
                </Loading>
            } />
            <Route path="player">
                <Route path=':chapterNumber' element={
                    <Loading>
                        <ChapterDisplay pathname={pathname} hash={hash} />
                    </Loading>
                } />
                <Route path=':chapterNumber/edit' element={
                    <Loading>
                        <ChapterEdit pathname={pathname} />
                    </Loading>
                } />
            </Route>
            <Route path="rules">
                <Route path=':chapterNumber' element={
                    <Loading>
                        <ChapterDisplay pathname={pathname} hash={hash} />
                    </Loading>
                } />
                <Route path=':chapterNumber/edit' element={
                    <Loading>
                        <ChapterEdit pathname={pathname} />
                    </Loading>
                } />
            </Route>
        </Routes>
    )
}