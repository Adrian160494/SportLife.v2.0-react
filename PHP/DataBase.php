<?php
/**
 * Created by PhpStorm.
 * User: Adrian
 * Date: 14.03.2018
 * Time: 17:34
 */

class DataBase {

    public $_host,$_user, $_password, $_db_name, $_db_connection;

    function __construct(){
        $this->_host = 'localhost';
        $this->_user = 'root';
        $this->_password = '';
        $this->_db_name = 'sport';
        $this->_db_connection = new mysqli($this->_host,$this->_user, $this->_password, $this->_db_name);
    }

    function getAllProtein(){
        $sql = "SELECT * from protein";
        $result = $this->_db_connection->query($sql);
        $products = [];
        while($row = $result->fetch_assoc()){
            array_push($products,$row);
        }
        return $products;
    }
    function getAllCarbon(){
        $sql = "SELECT * from carbon";
        $result = $this->_db_connection->query($sql);
        $products = [];
        while($row = $result->fetch_assoc()){
            array_push($products,$row);
        }
        return $products;
    }
    function getAllFat(){
        $sql = "SELECT * from fat";
        $result = $this->_db_connection->query($sql);
        $products = [];
        while($row = $result->fetch_assoc()){
            array_push($products,$row);
        }
        return $products;
    }
}
