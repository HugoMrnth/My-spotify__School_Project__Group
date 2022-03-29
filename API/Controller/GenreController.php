<?php

class GenreController extends Controller {

    public function index()
    {

        $genre_model = new GenreModel();

        $genres = $genre_model->getGenres();
        $this->json($genres);
    }

    public function filter($vars)
    {
        $genre_model = new GenreModel();
        $albums = $genre_model->getAlbumsWithGenre($vars->id);

        $this->json($albums);
    }
}