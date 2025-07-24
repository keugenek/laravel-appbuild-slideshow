<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PresentationView;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PresentationController extends Controller
{
    /**
     * Display the presentation.
     */
    public function index()
    {
        $presentationView = PresentationView::firstOrCreate([], ['view_count' => 0]);
        
        return Inertia::render('presentation', [
            'viewCount' => $presentationView->view_count
        ]);
    }
    
    /**
     * Increment the view count when final slide is viewed.
     */
    public function store(Request $request)
    {
        $presentationView = PresentationView::firstOrCreate([], ['view_count' => 0]);
        $presentationView->increment('view_count');
        
        return Inertia::render('presentation', [
            'viewCount' => $presentationView->view_count
        ]);
    }
}