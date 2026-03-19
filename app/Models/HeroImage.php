<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroImage extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'image',
        'sort',
        'active',
    ];

    protected $casts = [
        'active' => 'boolean',
        'sort' => 'integer',
    ];
}

