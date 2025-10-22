<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VenueSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('venues')->insert([
            [
                'venue_name' => 'Grand Theater',
                'city' => 'Jakarta',
                'province' => 'DKI Jakarta',
                'postal_code' => '10110',
                'address_detail' => 'Jl. Merdeka No.1',
            ],
            [
                'venue_name' => 'Stadium Utama',
                'city' => 'Surabaya',
                'province' => 'Jawa Timur',
                'postal_code' => '60293',
                'address_detail' => 'Jl. Pahlawan No.10',
            ],
        ]);
    }
}
