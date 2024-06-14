<?php

$jsonContentString = file_get_contents("data.json");

$jsonContentArray = json_decode($jsonContentString, true);

if (isset($_POST["element"])) {

    unset($jsonContentArray[$_POST["element"]]);

    $jsonContentArray = array_values($jsonContentArray);

    $jsonContentRemoved = json_encode($jsonContentArray);

    file_put_contents("data.json", $jsonContentRemoved);
}

header("Content-Type: application/json");

echo $jsonContentRemoved;
