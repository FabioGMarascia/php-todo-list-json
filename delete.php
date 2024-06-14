<?php

$jsonContentString = file_get_contents("data.json");

$jsonContentArray = json_decode($jsonContentString, true);

$indexToRemove = $_POST["element"];

if (isset($_POST["element"])) {

    unset($jsonContentArray[$indexToRemove]);

    $jsonContentArray = array_values($jsonContentArray);

    $jsonContentRemoved = json_encode($jsonContentArray);

    file_put_contents("data.json", $jsonContentRemoved);
}

header("Content-Type: application/json");

echo $jsonContentRemoved;
