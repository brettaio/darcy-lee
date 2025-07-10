<?php

namespace App\Http\Middleware;

use Illuminate\Cookie\Middleware\EncryptCookies as BaseMiddleware;

class EncryptCookies extends BaseMiddleware
{
    /**
     * The names of the cookies that should NOT be encrypted.
     *
     * @var array<int,string>
     */
    protected $except = [
        'XSRF-TOKEN',  // ← allow your SPA to read/send the raw CSRF token
    ];
}