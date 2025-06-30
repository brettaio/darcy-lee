<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use App\Models\Address;
use App\Models\Sponsor;
use App\Models\Sponsorship;
use App\Models\FeeSetting;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public $incrementing = false;
    protected $keyType   = 'string';

    /**
     * Automatically generate a unique 6-char ID if none provided.
     */
    protected static function booted()
    {
        static::creating(function ($user) {
            if (empty($user->id)) {
                do {
                    $code = '';
                    for ($i = 0; $i < 3; $i++) {
                        $code .= Str::upper(Str::random(1));
                        $code .= rand(0, 9);
                    }
                } while (self::whereKey($code)->exists());
                $user->id = $code;
            }
        });
    }

    protected $fillable = [
        'id','title','first_name','middle_name','last_name','suffix',
        'preferred_name','email','password','date_of_birth','sport',
        'sponsorship_goal','sponsorship_currency','position','club',
        'division','league','sponsorship_perks','player_accolades',
        'primary_address_id','billing_address_id',
    ];

    protected $hidden = [
        'password','remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password'          => 'hashed',
        'player_accolades'  => 'array',
        'sponsorship_perks' => 'array',
    ];

    // expose these computed attrs in arrays/JSON
    protected $appends = [
        'total_sponsorships','sponsorship_target','is_goal_met',
    ];

    // ——— Addresses ——————————————————————————————————————————

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function primaryAddress()
    {
        return $this->belongsTo(Address::class,'primary_address_id');
    }

    public function billingAddress()
    {
        return $this->belongsTo(Address::class,'billing_address_id');
    }

    // ——— Relationships ——————————————————————————————————————

    /**
     * Sponsors who have backed this player.
     */
    public function sponsors()
    {
        return $this->belongsToMany(
            Sponsor::class,
            'sponsorships',
            'user_id',
            'sponsor_id'
        )
        ->withPivot(['amount','sponsorship_at'])
        ->withTimestamps();
    }

    /**
     * Raw Sponsorship records for this player.
     */
    public function sponsorships()
    {
        return $this->hasMany(Sponsorship::class,'user_id','id');
    }

    // ——— Computed Attributes ——————————————————————————————————

    /**
     * Total amount this player has raised.
     */
    public function getTotalSponsorshipsAttribute(): float
    {
        return round((float)$this->sponsorships()->sum('amount'),2);
    }

    /**
     * Gross target including processing & platform fees.
     */
    public function getSponsorshipTargetAttribute(): float
    {
        $fees = FeeSetting::latest()->first();
        $net  = $this->sponsorship_goal;
        $pp   = $fees->payment_processing_fee_pct  ?? 0;
        $pf   = $fees->platform_fee_pct            ?? 0;

        return round($net * (1 + $pp + $pf), 2);
    }

    /**
     * Has the player met their net goal?
     */
    public function getIsGoalMetAttribute(): bool
    {
        return $this->total_sponsorships >= $this->sponsorship_goal;
    }
}
