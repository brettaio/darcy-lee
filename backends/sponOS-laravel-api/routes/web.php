<?php

use Illuminate\Support\Facades\Route;

// anything under /api/* will now run the full "web" stack (sessions + ValidationException → JSON)
Route::prefix('api')
     ->middleware(['web'])
     ->group(function () {
         require __DIR__ . '/api.php';
     });
Route::get('/', function () {
    return ["Here we are Here we go!"];
});
