<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Sponsor;
use App\Models\Sponsorship;

class SponsorshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'first_name'    => 'Alice',
                'last_name'     => 'Anderson',
                'email'         => 'alice@example.com',
                'amount'        => 200.00, 
            ],
            [
                'first_name'    => 'Bob',
                'last_name'     => 'Brown',
                'email'         => 'bob@example.com',
                'amount'        => 250.00,
            ],
            [
                'first_name'    => 'Carol',
                'last_name'     => 'Clark',
                'email'         => 'carol@example.com',
                'amount'        => 200.00
            ],
            [
                'first_name'    => 'Derek',
                'last_name'     => 'Dickson',
                'email'         => 'derek@example.com',
                'amount'        => 10.00
            ],
            [
                'first_name'    => 'Evie',
                'last_name'     => 'Ecclesten',
                'email'         => 'evie@example.com',
                'amount'        => 50.00
            ],
            [
                'first_name'    => 'Fran',
                'last_name'     => 'Fanny',
                'email'         => 'fran@example.com',
                'amount'        => 350.00
            ]
        ];
        foreach ($data as $d) {
            //1) Create or fetch the Sponsor record
            $sponsor = Sponsor::firstOrCreate(
                ['email' => $d['email'] ],
                [
                    'first_name'            => $d['first_name'],
                    'last_name'             => $d['last_name'],
                    'is_corporate'          => false,
                    'stripe_customer_id'    => null,
                ]
                );

                // 2) Create Sponsorship record against player x0x0x0
                Sponsorship::create([
                    'sponsor_id'                => $sponsor->id,
                    'user_id'                   => 'x0x0x0',
                    'amount'                    => $d['amount'],
                    'stripe_payment_intent_id'  => null,
                    // 'sponsorship_at' will default to now()
                ]);
        }

    }
}
