import { Books } from "./chapterInterfaces/ChapterInterfaces";

export default interface SearchResults {
    book: Books,
    chapter: number,
    excerpt: string 
}