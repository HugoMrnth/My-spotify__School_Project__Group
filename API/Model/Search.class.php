<?php

class Search
{

    public function getAll()
    {
        $query = MyDatabase::$db->prepare('SELECT GROUP_CONCAT(genres.name SEPARATOR ", ") as genre, albums.id as album_id , albums.name as album, artists.id as artist_id, artists.name as artist FROM albums LEFT JOIN artists ON artist_id = artists.id LEFT JOIN genres_albums ON album_id = albums.id LEFT JOIN genres ON genres.id = genre_id GROUP BY albums.id;');

        $query->execute();

        return $query->fetchAll();
    }
}
