<?php

$jsonContentString = file_get_contents("data.json");

header("Content-Type: application/json");

$jsonContentArray = json_decode($jsonContentString, true);

if (isset($_POST["element"]) || isset($_POST["type"])) {

    if (isset($_POST["element"]) && $_POST["type"] == "add") {

        $toDo = [

            "string" => $_POST["element"],
            "done" => false,
        ];

        $jsonContentArray[] = $toDo;

        $jsonContentAdded = json_encode($jsonContentArray);

        file_put_contents("data.json", $jsonContentAdded);

        echo $jsonContentAdded;
    } elseif ($_POST["type"] == "delete") {

        unset($jsonContentArray[$_POST["element"]]);

        $jsonContentArray = array_values($jsonContentArray);

        $jsonContentRemoved = json_encode($jsonContentArray);

        file_put_contents("data.json", $jsonContentRemoved);

        echo $jsonContentRemoved;
    } elseif ($_POST["type"] == "update") {

        $jsonContentArray[$_POST["element"]]["done"] == false ? $jsonContentArray[$_POST["element"]]["done"] = true : $jsonContentArray[$_POST["element"]]["done"] = false;

        $jsonContentUpdated = json_encode($jsonContentArray);

        file_put_contents("data.json", $jsonContentUpdated);

        echo $jsonContentUpdated;
    } elseif ($_POST["type"] == "clear") {

        array_splice($jsonContentArray, 0);

        $jsonContentCleared = json_encode($jsonContentArray);

        file_put_contents("data.json", $jsonContentCleared);

        echo $jsonContentCleared;
    }
} else {

    echo $jsonContentString;
};
