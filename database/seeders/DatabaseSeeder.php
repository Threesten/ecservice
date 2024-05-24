<?php

namespace Database\Seeders;

use App\Models\Ec;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Threesten RAMIANDRISOA',
            'email' => 'ramiandrisoath@gmail.com',
            'password' => bcrypt('12345678'),
        ]);

        Ec::factory()
        ->count(5)
        ->create();
    }
}
