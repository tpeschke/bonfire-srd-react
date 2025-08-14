create table srdchapters (
	id serial primary key,
	book varchar(10),
	chapter int,
	chapterContents text
);

insert into srdchapters (book, chapter, chaptercontents) values
    ('rules', 1, ''),
    ('rules', 2, ''),
    ('rules', 3, ''),
    ('rules', 4, ''),
    ('rules', 5, ''),
    ('rules', 6, ''),
    ('rules', 7, '')
    ('player', 1, ''),
    ('player', 2, ''),
    ('player', 3, ''),
    ('player', 4, ''),
    ('player', 5, ''),
    ('player', 6, ''),
    ('player', 7, ''),
    ('player', 8, ''),
    ('player', 9, ''),
    ('player', 10, ''),
    ('player', 11, '')
;