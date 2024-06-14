<?php

$jsonContentString = file_get_contents("data.json");

$jsonContentArray = json_decode($jsonContentString, true);

if (isset($_POST["element"])) {

    // unset($jsonContentArray[$_POST["element"]]);

    // $jsonContentArray = array_values($jsonContentArray);

    $jsonContentArray[$_POST["element"]]["done"] == false ? $jsonContentArray[$_POST["element"]]["done"] = true : $jsonContentArray[$_POST["element"]]["done"] = false;


    $jsonContentUpdated = json_encode($jsonContentArray);

    file_put_contents("data.json", $jsonContentUpdated);
}

header("Content-Type: application/json");

echo $jsonContentUpdated;
