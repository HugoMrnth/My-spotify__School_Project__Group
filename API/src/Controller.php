<?php

abstract class Controller {

    protected function json($array)
    {
        header('Content-Type: application/json');
        echo json_encode($array);
    }
}