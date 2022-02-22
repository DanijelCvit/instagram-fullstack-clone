<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id'=> User::factory() ,
            'description' => $this->faker->paragraph(),
            'slug' => $this->faker->slug(),
						'image' => $this->faker->image(public_path('images'), 50, 50, null, false)
        ];
    }
}
