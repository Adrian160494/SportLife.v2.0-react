<?php
/**
 * Created by PhpStorm.
 * User: Adrian
 * Date: 14.03.2018
 * Time: 17:43
 */
require_once "./DataBase.php";

$database = new DataBase();

echo json_encode($database->getAllProtein());

?>