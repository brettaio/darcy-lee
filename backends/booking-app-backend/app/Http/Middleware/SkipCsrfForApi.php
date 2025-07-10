<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class SkipCsrfForApi extends BaseVerifier
{
    /**
     * URIs that should be excluded from CSRF verification.
     *
     * @var array<int,string>
     */
    protected $except = [
        'api/*',  // ← skip CSRF for every API route
    ];
}