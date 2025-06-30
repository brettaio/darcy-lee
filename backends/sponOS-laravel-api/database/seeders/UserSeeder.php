<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Address;
use App\Models\User;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Primary Address (Australia)
        $primary = Address::create([
            'id'                   => (string) Str::uuid(),
            'street_number'         => 6,
            'street_name'           => 'Clareville',
            'street_type'           => 'Road',
            'city'                  => 'Smiths Creek',
            'region_code'           => 'NSW',
            'postal_code'           => '2484',
            'country_code'          => 'AU',
        ]);

        // Billing address (Canada)
        $billing = Address::create([
            'id'                   => (string) Str::uuid(),
            'unit_type'             => 'Unit',
            'unit_number'           => '1307',
            'street_number'         => 100,
            'street_name'           => 'Fullarton',
            'street_type'           => 'Street',
            'city'                  => 'London',
            'region_code'           => 'ON',
            'postal_code'           => 'N6A 0G8',
            'country_code'          => 'CA'
        ]);

        User::create([
            'id'                    => 'x0x0x0',
            'title'                 => 'Mr',
            'first_name'            => 'Brett',
            'middle_name'           => null,
            'last_name'             => 'Connell',
            'suffix'                => null,
            'preferred_name'        => 'Bretta',

            'email'                 => 'etc@bretta.io',
            'password'              => Hash::make('Qwerty123!'),

            'date_of_birth'         => '1987-12-28',
            'sport'                 => 'Australian Football',
            'sponsorship_goal'      => 600,
            'sponsorship_currency'  => 'AUD',
            'position'              => 'Centre Half Back / Full Back',
            'club'                  => 'Toronto Eagles Australian Football Club',
            'division'              => 'Open Men\'s',
            'league'                => 'AFL Ontario',
            'player_accolades'      => json_encode([
                ['team' => 'Morningside Panthers', 'year' => 2009, 'award' => 'AFLQ State League Premier' ],
                ['team' => 'Morningside Panthers', 'year' => 2009, 'award' => 'Queensland U/21 State Co-Captain' ],
                ['team' => 'Etobicoke Kangaroos', 'year' => 2011, 'award' => 'AFLO Premiers' ],
                ['team' => 'Etobicoke Kangaroos', 'year' => 2012, 'award' => 'AFLO Premiers' ],
                ['team' => 'Etobicoke Kangaroos', 'year' => 2015, 'award' => 'AFLO Premiers' ],
                ['team' => 'Etobicoke Kangaroos', 'year' => 2015, 'award' => 'AFLO Coach of the Year' ],
            ]),
            'sponsorship_perks'     => json_encode([
                ['item' => '2025 Official Team Player Shirt',     'description' => 'One 2025 Official Team Player Shirt'],
                ['item' => '2 x 2025 Best & Fairest Sponsor Tickets', 'description' => 'Two tickets to the end-of-year banquet as a player sponsor'],
                ['item' => 'Official Team Store Discount',  'description' => '20% off at the Toronto Eagles AFC online team store'],
            ]),

            'primary_address_id' => $primary->id,
            'billing_address_id' => $billing->id,
        ]);
    }
}
