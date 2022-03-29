<?php
$app = new  class
{

    public $vars = [];

    private function match_uri($route)
    {
        $vars = [];
        $processed = preg_replace('/\?(.*)/', '', URI);
        $pattern = "@^" . preg_replace('/\\\:[a-zA-Z0-9\_\-]+/', '([a-zA-Z0-9\-\_]+)', preg_quote($route)) . "$@D";

        if (preg_match($pattern, $processed,  $vars)) {
            array_shift($vars);
            $re = '/:([^;]*?)(\/|\z)/';

            preg_match_all($re, $route, $matches, PREG_SET_ORDER, 0);

            $keys = array_map(function ($key) {
                return $key[1];
            }, $matches);

            $this->vars = (object) array_combine($keys, $vars);
            return true;
        }
        return false;
    }

    // public function models(...$models)
    // {
    //     $this->models = $models;
    //     return $this;
    // }

    public function get($route,  $object)
    {
        $match = $this->match_uri($route);


        if ($match) {
            if (METHOD == GET) {

                $object = explode('@', $object);

                require("Controller/$object[0].php");

                $callback = new $object[0]();

                $function = $object[1];

                $callback->$function($this->vars);
                die();
            }
        }
    }
};