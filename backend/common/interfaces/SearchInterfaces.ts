import { Books } from "./ChapterInterfaces";

export default interface SearchResults {
    book: Books,
    chapter: number,
    excerpt: string 
}