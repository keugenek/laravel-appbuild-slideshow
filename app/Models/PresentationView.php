<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\PresentationView
 *
 * @property int $id
 * @property int $view_count
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PresentationView newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PresentationView newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PresentationView query()
 * @method static \Illuminate\Database\Eloquent\Builder|PresentationView whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PresentationView whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PresentationView whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PresentationView whereViewCount($value)
 * @method static \Database\Factories\PresentationViewFactory factory($count = null, $state = [])
 * @method static PresentationView create(array $attributes = [])
 * @method static PresentationView firstOrCreate(array $attributes = [], array $values = [])
 * 
 * @mixin \Eloquent
 */
class PresentationView extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'view_count',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'view_count' => 'integer',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'presentation_views';
}