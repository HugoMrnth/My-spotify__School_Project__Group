<?php

class ArtistsController extends Controller
{
    public function all()
    {
        $model = new Artistes();

        $res = $model->getArtistes();

        $this->json($res);
    }

    public function info($vars)
    {
        $model = new Artistes();

        $res = $model->getArtistes($vars->id);

        $this->json($res); 
    }

    public function albums($vars)
    {
        $model = new Albums();

        $res = $model->getAlbumsByArtiste($vars->id);

        $this->json($res);
    }
}
