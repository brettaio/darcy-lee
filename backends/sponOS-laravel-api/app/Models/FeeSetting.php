<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeeSetting extends Model
{
    protected $fillable = [
        'payment_processing_fee_pct',
        'platform_fee_pct',
    ];
}
