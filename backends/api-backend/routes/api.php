<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('web')->group(function () {
    require __DIR__.'/auth.php'; 
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});