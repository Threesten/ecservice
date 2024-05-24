<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Ec extends Model
{
    use HasFactory, Notifiable;

    protected $primaryKey = 'code_element';
    protected $fillable = [
        "nom_element",
        "codeprof",
        "coeff",
    ];


}
