<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FeeSetting;

class FeeSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FeeSetting::create([
            'payment_processing_fee_pct'    =>  0.05,
            'platform_fee_pct'              => 0.15,
        ]);
    }
}
