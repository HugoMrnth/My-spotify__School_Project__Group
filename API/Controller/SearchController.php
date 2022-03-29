<?php

class SearchController extends Controller {
    
    public function all()
    {
        $model = new Search();

        $res = $model->getAll();

        $this->json($res);
    }
}