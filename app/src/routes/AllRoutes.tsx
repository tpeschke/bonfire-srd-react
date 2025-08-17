import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import ChapterDisplay from "../pages/chapterDisplay/ChapterDisplay";
import Loading from "../components/loading/Loading";
import ChapterEdit from "../pages/chapterEdit/ChapterEdit";
import OwnerAuth from "./OwnerAuth";
import Search from "../pages/search/Search";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";

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
            <Route path="privacypolicy" element={
                <Loading>
                    <PrivacyPolicy pathname={pathname} />
                </Loading>
            } />
            <Route path="search/:searchTerm" element={
                <Loading>
                    <Search pathname={pathname} />
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
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}