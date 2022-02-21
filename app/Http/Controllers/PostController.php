<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Psy\Util\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return  Post::with('author:username,image')->get(['id', 'user_id', 'image', 'description', 'slug']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'description' => 'required',

        ]);

        $attributes['user_id'] = 1;




        $attributes['user_id'] = 1;//auth()->id();
        $attributes['slug'] = \Illuminate\Support\Str::random(10);
//        $attributes['image'] = $request->file('uploaded_file')->store('images');
//        Post::create(['description' =>]);
        return  Post::create($attributes);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return $post;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $attributes = $request->validate([
           'description' => 'required',
        ]);
        Post::where('slug', $slug)->update($attributes);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
      return  Post::where('slug', $slug)->delete();
    }
}
