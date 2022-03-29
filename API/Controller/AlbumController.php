<?php

class AlbumController extends Controller
{
    public function all()
    {
        $model = new Albums();

        $res = $model->getAlbums();

        $this->json($res);
    }

    public function info($vars)
    {
        $model = new Albums();

        $res = $model->getAlbums($vars->id);

        $this->json($res);
    }

    public function detail($vars)
    {
        $model = new Albums();

        $res = $model->getAlbumsDetails(((int)$vars->id));

        $this->json($res);
    }

    public function randomAlbum() {
        $model = new Albums();

        $res = $model->randomAlbumHome();
        $this->json($res);
    }
}