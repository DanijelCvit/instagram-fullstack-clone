<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
		{
        return Post::orderBy('created_at', 'DESC')
            ->get()
            ->map(function ($post) {
                return [
									'id' => $post['id'],
										'slug' => $post['slug'],
                    'description' => $post['description'],
                    'image' => $post['image'],
                    'created_at' => $post['created_at']->diffForHumans(),
                    'author' => ['username' => $post['author']['username'], 'image' => $post['author']['image']],
									'comments' => $post->comments->map(function ($comment){
										return [
											'comment' => $comment['comment'],
											'created_at' => $comment['created_at'],
											'updated_at' => $comment['updated_at'],
											'author' => $comment['author']['username']

										];
									})
                ];
            })->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
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
         Post::create($attributes);
				return redirect("/");
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return Response
     */
    public function show(Post $post)
    {
        $post =   [
			'id' => $post['id'],
			'slug' => $post['slug'],
			'description' => $post['description'],
			'image' => $post['image'],
			'created_at' => $post['created_at']->diffForHumans(),
			'author' => ['username' => $post['author']['username'], 'image' => $post['author']['image']],
			'comments' => $post->comments->map(function ($comment){
				return [
					'comment' => $comment['comment'],
					'created_at' => $comment['created_at'],
					'updated_at' => $comment['updated_at'],
					'author' => $comment['author']['username']

				];
			})
		];

        return response($post);
    }

	/**
	 * Display the specified resource.
	 *
	 * @param int $id
	 * @return Response
	 */
	public function userPosts(int $id)
	{
		return Post::where('user_id', $id)->orderBy('created_at', 'DESC')
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
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param string $slug
     * @return Response
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
     * @return Response
     */
    public function destroy(String $slug)
    {
        return Post::where('slug', $slug)->delete();
    }
}
