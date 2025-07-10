<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// Any web‐middleware routes you need can go here.
// We’ll mount your API under the “web” middleware so sessions & CSRF work:

Route::prefix('api')
     ->middleware(['web'])
     ->group(function () {
        // Custom JSON Login (Now Protected by CSRF)
        Route::post('login', [AuthController::class, 'login'])->name('login');

         require __DIR__ . '/api.php';
     });

// A basic root route, just so web.php actually returns something
Route::get('/', function () {
    return response()->json(['message' => 'Booking App Backend']);
});