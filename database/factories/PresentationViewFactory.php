<?php

namespace Database\Factories;

use App\Models\PresentationView;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PresentationView>
 */
class PresentationViewFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\PresentationView>
     */
    protected $model = PresentationView::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'view_count' => $this->faker->numberBetween(0, 100),
        ];
    }
}