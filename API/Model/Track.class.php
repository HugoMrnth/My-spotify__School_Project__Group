<?php

class Track
{
    public function getALl()
    {
        $query = MyDatabase::$db->prepare('SELECT id, name as track_name, mp3 as src FROM tracks ');
        $query->execute();

        $res = $query->fetchAll();

        return $res;
    }
    public function getTrack(int $id = null)
    {
        $whereId = "";

        if ($id != null) {
            $whereId = "WHERE tracks.id = " . $id . ' LIMIT 1';
        }

        $query = MyDatabase::$db->prepare('SELECT * FROM tracks ' . $whereId);

        $query->execute();

        $res = $query->fetchAll();

        return $res;
    }
}
