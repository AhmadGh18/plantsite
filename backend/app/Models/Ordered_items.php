<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ordered_items extends Model
{
    protected $fillable = ['order_id', "plant_id"];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function plant()
    {
        return $this->belongsTo(Plant::class);
    }
}
