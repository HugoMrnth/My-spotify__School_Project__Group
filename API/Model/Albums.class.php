<?php
    class Albums {
        public function getAlbums(int $id = null) {
            $whereId = "GROUP BY albums.id";

            if($id != null) {
                $whereId = " WHERE albums.id = " . $id;
            }

            $request = MyDatabase::$db->prepare('SELECT albums.id, albums.name, albums.cover, albums.cover_small, albums.popularity, albums.description,   YEAR(FROM_UNIXTIME(albums.release_date)) as year, count(tracks.id) as "track_count" FROM albums INNER JOIN tracks ON tracks.album_id = albums.id ' . $whereId);
            $request->execute();
            return $result = $request->fetchAll();
        }

        public function getAlbumsDetails(int $id = null) {
            $whereId = "";

            if($id != null) {
                $whereId = "WHERE albums.id = " . $id;
            }
            $request = MyDatabase::$db->prepare('SELECT DISTINCT albums.id as "album_id", albums.name as "album_name", description, cover, cover_small, YEAR(FROM_UNIXTIME(release_date)) as "release_date", popularity, tracks.id AS "track_id", tracks.name as "track_name", track_no, duration, mp3, genres.name as "genre_name" FROM albums INNER JOIN tracks ON albums.id = tracks.album_id INNER JOIN genres_albums ON albums.id = genres_albums.album_id INNER JOIN genres ON genres_albums.genre_id = genres.id ' . $whereId);
            $request->execute();
            return $result = $request->fetchAll();
        }

        public function getAlbumsByArtiste(int $id) {
            $request = MyDatabase::$db->prepare('SELECT albums.name as "album", albums.id as "album_id", artists.name FROM albums INNER JOIN artists ON albums.artist_id = artists.id WHERE artists.id = :id_artist');
            $request->execute(array(
                "id_artist" => $id
            ));
            return $result = $request->fetchAll();
        }

        public function randomAlbumHome() {
            $request = MyDatabase::$db->prepare('SELECT albums.id, albums.cover, albums.cover_small, albums.popularity, albums.description, YEAR(FROM_UNIXTIME(albums.release_date)) as year, count(tracks.id) as "track_count" FROM albums INNER JOIN tracks ON tracks.album_id = albums.id GROUP BY albums.id ORDER BY RAND() LIMIT 10');
            $request->execute();
            return $result = $request->fetchAll();
        }
    }
