<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Address extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id', 'unit_type','unit_number','street_number','street_number_suffix','pre_directional','street_type','post_directional','city','region_code','postal_code', 'country_code'];

        //Hook into the create event to generate a UUID if none is set
        protected static function booted()
        {
            static::creating(function ($address) {
                if (! $address->getKey()){
                    $address->{$address->getKeyName()} = (string) Str::uuid();
                }
            });
        }
}
