<?php

class TrackController extends Controller
{
    public function all()
    {
        $model = new Track();

        $res = $model->getALl();

        $this->json($res);
    }

    public function info($vars)
    {
        $model = new Track();

        $res = $model->getTrack($vars->id);

        $this->json($res);
    }
}
