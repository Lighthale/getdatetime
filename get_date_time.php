<?php
    // set default timezone
    date_default_timezone_set('Asia/Singapore');

    // set response header doc type as JSON
    header('Content-Type: application/json; charset=utf-8');

    echo json_encode([
        'current_date' => date('m-d-Y H:i:s')
    ]);