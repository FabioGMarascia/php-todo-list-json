<?php

$toDoList = [
    [
        "string" =>  "Comprare la carne",
        "done" => false
    ],
    [
        "string" =>  "Sistemare la stanza",
        "done" => false
    ],
    [
        "string" =>  "Pulire il bagno",
        "done" => false
    ],
    [
        "string" =>  "Chiamare il dottore",
        "done" => false
    ],
    [
        "string" =>  "Riordinare la scrivania",
        "done" => false
    ],
    [
        "string" =>  "Andare in palestra",
        "done" => false
    ],
];

header("Content-Type: application/json");

$jsonString = json_encode($toDoList);

echo $jsonString;
