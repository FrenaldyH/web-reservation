<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $primaryKey = 'event_id';

    protected $fillable = ['venue_id', 'date_time', 'price', 'organizer', 'description', 'genre'];

    // Satu event dimiliki oleh satu venue
    public function venue()
    {
        return $this->belongsTo(Venue::class, 'venue_id', 'venue_id');
    }

    // Satu event punya banyak tiket
    public function tickets()
    {
        return $this->hasMany(Ticket::class, 'event_id', 'event_id');
    }
}
