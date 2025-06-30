<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Sponsor;
use App\Models\User;

class Sponsorship extends Model
{
    // Allow mass assignment on these fields
    protected $fillable = [
        'sponsor_id',
        'user_id',
        'amount',
        'stripe_payment_intent_id',
        'sponsorship_at',
    ];

    //If you want sponsorship_at to be a Carbon instance automatically:
    protected $casts = [
        'sponsorship_at' => 'datetime',
    ];
    
    /**
     * Each Donation belongs to one Sponsor.
     */
    public function sponsor()
    {
        return $this->belongsTo(Sponsor::class);
    }

    /** 
     * Each Donation belongs to one User (player).
     */
    public function player()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
