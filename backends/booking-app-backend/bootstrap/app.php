<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web:      __DIR__.'/../routes/web.php',
        api:      __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health:   '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // 1) Prepend Sanctum's EnsureFrontendRequestsAreStateful to the API group
        $middleware->statefulApi();

        // 2) Apply the full "web" stack (sessions, CSRF, etc.) to your web routes:
        $middleware->appendToGroup('web', [
            // ← use your subclass here instead of the core EncryptCookies
            \App\Http\Middleware\ExemptXsrfCookie::class,

            // queue cookies onto the response
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,

            // start session for stateful requests
            \Illuminate\Session\Middleware\StartSession::class,

            // share validation errors from the session into views
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,

            // verify the CSRF token on POST/PUT/DELETE/etc.
            \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class,

            // handle route model binding & parameter substitution
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })
    ->create();
