<?php

$jsonContentString = file_get_contents("data.json");

if (isset($_POST["string"])) {
    $jsonContentArray = json_decode($jsonContentString, true);

    $toDo = [

        "string" => $_POST["string"],
        "done" => false,
    ];


    $jsonContentArray[] = $toDo;

    $jsonContentAdded = json_encode($jsonContentArray);

    file_put_contents("data.json", $jsonContentAdded);

    header("Content-Type: application/json");

    echo $jsonContentAdded;
}
