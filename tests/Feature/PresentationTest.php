<?php

namespace Tests\Feature;

use App\Models\PresentationView;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PresentationTest extends TestCase
{
    use RefreshDatabase;

    public function test_presentation_page_loads_successfully(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('presentation')
                ->has('viewCount')
        );
    }

    public function test_presentation_starts_with_zero_views(): void
    {
        $response = $this->get('/');

        $response->assertInertia(fn ($page) => 
            $page->where('viewCount', 0)
        );
    }

    public function test_view_count_increments_when_posted(): void
    {
        // Initial load
        $this->get('/');
        
        // Simulate viewing final slide
        $response = $this->post('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->where('viewCount', 1)
        );

        // Check database
        $this->assertDatabaseHas('presentation_views', [
            'view_count' => 1
        ]);
    }

    public function test_multiple_views_increment_correctly(): void
    {
        // View final slide multiple times
        $this->post('/');
        $this->post('/');
        $response = $this->post('/');

        $response->assertInertia(fn ($page) => 
            $page->where('viewCount', 3)
        );
    }

    public function test_presentation_view_model_created_automatically(): void
    {
        $this->assertDatabaseCount('presentation_views', 0);
        
        $this->get('/');
        
        $this->assertDatabaseCount('presentation_views', 1);
        $this->assertDatabaseHas('presentation_views', [
            'view_count' => 0
        ]);
    }
}