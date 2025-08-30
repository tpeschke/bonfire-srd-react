export default {
    getByBookAndChapter: 'select * from srdchapters where book = $1 and chapter = $2',
    updateChapter: 'update srdchapters set chaptercontents = $1 where book = $2 and chapter = $3',
}