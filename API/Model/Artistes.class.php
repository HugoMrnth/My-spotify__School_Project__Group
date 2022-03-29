<?php 

    class Artistes {

        public function getArtistes(int $id = null) {
            $whereId = "";

            if($id != null) {
                $whereId = "WHERE artists.id = " . $id;
            }

            $request = MyDatabase::$db->prepare('SELECT * FROM artists ' . $whereId);
            $request->execute();
            return $result = $request->fetchAll();
        }
        
    }