export default {
    conviction: "select * from ( select conviction as title from srdconvictions Union select title as title from cvtraits where title is not null and title != 'TBD' and title != 'Test Descriti') t group by title order by random() limit 1",
    description: "select * from ( select description as title from srddescriptions Union select title as title from cvdescriptions c where title is not null and title != 'TBD' and title != 'Test Descriti') t group by title order by random() limit 1",
    relationship: "select verb || ' ' || noun as title from (select 1 as joinid, id, noun from bbrandomdevotion b where verb is not null order by random() limit 1) n join (select 1 as joinid, id, verb from bbrandomdevotion b where verb is not null order by random() limit 1) v on v.joinid = n.joinid",
    flaw: "select * from srdflaws s  order by random() limit 1"
}