<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Post::orderBy('created_at', 'DESC')
            ->get()
            ->map(function ($post) {
                return [
										'slug' => $post['slug'],
                    'description' => $post['description'],
                    'image' => $post['image'],
                    'created_at' => $post['created_at']->diffForHumans(),
                    'author' => ['username' => $post['author']['username'], 'image' => $post['author']['image']]
                ];
            })->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'description' => 'required',
            'image' => ['required', 'image']
        ]);

        $attributes['user_id'] = 1;//auth()->id();
        $attributes['slug'] = Str::random(10);
        $attributes['image'] = 'storage/' . $request->file('image')->store('images');
        return Post::create($attributes);
    }

    /**
     * Display the specified resource.
     *
     * @param string $slug
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $post =  [
					'slug' => $post['slug'],
					'description' => $post['description'],
                'image' => $post['image'],
                'created_at' => $post['created_at']->diffForHumans(),
                'author' => ['username' => $post['author']['username'], 'image' => $post['author']['image']]
            ];

        return response($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, String $slug)
    {
        $attributes = $request->validate([
            'description' => 'required',
        ]);

        if($request->file('image')){
            $attributes['image'] = 'storage/' . $request->file('image')->store('images');
        }

       return Post::where('slug', $slug)->update($attributes);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy(String $slug)
    {
        return Post::where('slug', $slug)->delete();
    }
}
