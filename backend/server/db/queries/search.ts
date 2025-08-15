export default {
    search: "select book, chapter, substring(chaptercontents, searchPosition - 10, searchPosition + 10) as excerpt from (select book, chapter, position (UPPER($1) in upper(chaptercontents)) as searchPosition, chaptercontents from srdchapters s where UPPER(chaptercontents) like UPPER(( '%' || $1 || '%' ))) sr"
}