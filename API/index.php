<?php
require 'src/App.php';
require 'src/Controller.php';



spl_autoload_register(function ($class_name) {
    include './Model/' . $class_name . '.class.php';
});

define('METHOD',   $_SERVER['REQUEST_METHOD']);
define('GET', "GET");
define('URI', rtrim($_SERVER['REQUEST_URI'], '/'));
 
include 'router.php';

header('Content-Type: application/json');
echo(json_encode(['api' => '200']));