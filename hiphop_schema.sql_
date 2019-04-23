CREATE TABLE artists (id SERIAL UNIQUE PRIMARY KEY,name varchar(90));
CREATE TABLE lyrics (id SERIAL UNIQUE PRIMARY KEY,text text);
CREATE TABLE songs (id SERIAL UNIQUE, title varchar(90), artist_id SERIAL REFERENCES artists, lyric_id SERIAL REFERENCES lyrics);