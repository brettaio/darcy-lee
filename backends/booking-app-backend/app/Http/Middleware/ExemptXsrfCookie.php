<?php

namespace App\Http\Middleware;

use Illuminate\Cookie\Middleware\EncryptCookies as Middleware;

class ExemptXsrfCookie extends Middleware
{
    /**
     * The names of the cookies that should not be encrypted.
     *
     * @var array<int,string>
     */
    protected $except = [
        'XSRF-TOKEN',  // ← allow the raw CSRF token cookie
    ];
}
