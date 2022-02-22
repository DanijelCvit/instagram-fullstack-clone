<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $guarded = [];
  protected $with = ['author:id,username,image', 'comments'];

    public function comments(){
      return  $this->hasMany(Comment::class);
    }

    public function author(){
      return  $this->belongsTo(User::class, 'user_id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }


}
