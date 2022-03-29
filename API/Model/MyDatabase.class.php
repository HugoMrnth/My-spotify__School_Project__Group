<?php
require_once 'config.php';

    class MyDatabase {
        
            public static $db;
            public function connect_to_db ($host,$dbname, $user, $mp) {
                self::$db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $mp);
                self::$db->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
                self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                //self::$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            }

        }

    $PDO = new MyDatabase();
    $PDO->connect_to_db($host,$dbname,$user,$mp);

        