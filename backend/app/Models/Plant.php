<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    protected $fillable = ["title", "descreption", "price", "thumbnail", "category_id"];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(PlantImage::class);
    }

    public function orderedItems()
    {
        return $this->hasMany(Ordered_items::class);
    }
}
