<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email'        => 'admin@example.com'],
            [
                'name'      => 'Admin User',
                'password'  => Hash::make('Qwerty123!'),
            ]
        );
    }
}
