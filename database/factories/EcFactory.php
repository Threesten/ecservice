<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ec>
 */
class EcFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "nom_element"=> $this->faker->randomElement(["Math Disc","Dev Mob","DevOps"]),
            "coeff"=> $this->faker->randomElement(["1","2","3"]),
            "codeprof"=> $this->faker->randomElement([1,2,3]),
        ];
    }
}
