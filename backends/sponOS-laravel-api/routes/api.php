<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// 1) Custom JSON login (returns 422 on bad creds, 200 on success)
Route::post('login', [AuthController::class, 'login'])->name('login');

// 2. Keep your register, logout, etc., by pulling in the Breeze auth file
require __DIR__.'/auth.php';

// 3. Your protected player endpoint
Route::middleware('auth:sanctum')->get('/player', function (Request $request) {
    return $request->user();
});

Route::put('player', [AuthController::class, 'update']);