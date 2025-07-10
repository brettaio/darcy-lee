<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use App\Http\Middleware\VerifyCsrfToken;

Route::middleware([
    EnsureFrontendRequestsAreStateful::class,
    EncryptCookies::class,
    AddQueuedCookiesToResponse::class,
    StartSession::class,
    ShareErrorsFromSession::class,
    VerifyCsrfToken::class,
])->group(function () {
    // health is fine outside auth
    Route::get('/health', fn() => ['status'=>'ok']);

    // everything below requires a valid sanctum session cookie
    Route::middleware('auth:sanctum')->group(function(){
      Route::get('/user',    [AuthController::class, 'user']);
      Route::post('/logout', [AuthController::class, 'logout']);
    });
    
    // fallback
    Route::fallback(fn() => response()->json(['message'=>'Not Found'],404));
});
