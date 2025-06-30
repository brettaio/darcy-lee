<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use App\Models\Sponsorship;
use App\Models\User;

class Sponsor extends Model
{
    use HasUuids;
    public $incrementing = false;
    protected $keyType = 'string';

    //Allow mass assignment on these fields 
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'is_corporate',
        'stripe_customer_id',
    ];

    /**
     * The sponsorships this sponsor has made.
     */
    public function sponsorships()
    {
        return $this->hasMany(Sponsorship::class);
    }
    
    /**
     * The players (users) this sponsor has backed.
     */
    public function players()
    {
        return $this->belongsToMany(
            User::class,
            'sponsorships',
            'sponsor_id',
            'user_id')->withPivot(['amount','sponsorship_at']);
    }
}
