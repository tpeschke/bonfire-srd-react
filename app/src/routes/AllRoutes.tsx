import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChapterDisplay from "../pages/chapterDisplay/ChapterDisplay";
import Loading from "../components/loading/Loading";
import ChapterEdit from "../pages/chapterEdit/ChapterEdit";
import OwnerAuth from "./OwnerAuth";
import Search from "../pages/search/Search";

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
            <Route path="search" element={
                <Loading>
                    <Search />
                </Loading>
            } />
            <Route path="players">
                <Route path=':chapterNumber' element={
                    <Loading>
                        <ChapterDisplay pathname={pathname} hash={hash} />
                    </Loading>
                } />
                <Route path=':chapterNumber/edit' element={
                    <OwnerAuth>
                        <ChapterEdit pathname={pathname} />
                    </OwnerAuth>
                } />
            </Route>
            <Route path="rules">
                <Route path=':chapterNumber' element={
                    <Loading>
                        <ChapterDisplay pathname={pathname} hash={hash} />
                    </Loading>
                } />
                <Route path=':chapterNumber/edit' element={
                    <OwnerAuth>
                        <ChapterEdit pathname={pathname} />
                    </OwnerAuth>
                } />
            </Route>
        </Routes>
    )
}