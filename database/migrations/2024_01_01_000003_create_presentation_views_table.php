<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('presentation_views', function (Blueprint $table) {
            $table->id();
            $table->integer('view_count')->default(0)->comment('Number of times the final slide has been viewed');
            $table->timestamps();
            
            // Index for performance
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('presentation_views');
    }
};