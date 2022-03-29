<?php

class GenreModel
{
    public function getGenres()
    {
        $query = MyDatabase::$db->prepare('SELECT * FROM genres');

        $query->execute();

        return $query->fetchAll();
    }


    public function getAlbumsWithGenre($id)
    {
        $query = MyDatabase::$db->prepare('SELECT albums.id AS "album_id", cover_small, description, YEAR(FROM_UNIXTIME(release_date)) as "year", popularity, albums.name as name, genres.name as genre_name FROM genres_albums INNER JOIN genres ON genre_id = genres.id LEFT JOIN albums ON album_id = albums.id WHERE genre_id = :id;');

        $query->execute([
            'id' => $id
        ]);

        $res = $query->fetchAll();

        return $res;
    }
}
