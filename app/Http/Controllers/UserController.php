<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return string
		 */
    public function index(): string
		{
        return 'No User Specified';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
			$fields = $request->validate([
				'first_name' => 'required|string',
				'last_name' => 'required|string',
				'username' => 'required|string|unique:users,username',
				'email' => 'required|string|unique:users,email',
				'password' => 'required|string|confirmed'
			]);

			$user = User::create([
				'first_name' => $fields['first_name'],
				'last_name' => $fields['last_name'],
				'username' => $fields['username'],
				'email' => $fields['email'],
				'password' => bcrypt($fields['password'])
			]);

			$token = $user->createToken('remember_token')->plainTextToken;

			$response = [
				'user' => $user,
				'token' => $token
			];

			return response($response, 201);
    }

	/**
	 * Login user.
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function login(Request $request)
	{
		$fields = $request->validate([
			'email' => 'required|string',
			'password' => 'required|string'
		]);

		// Check Email
		$user = User::where('email', $fields['email'])->first();

		// Check Password
		if(!$user || !Hash::check($fields['password'], $user->password)) {
			return response([
				'message' => 'Bad Credentials'
			], 401);
		}

		$token = $user->createToken('remember_token')->plainTextToken;

		$response = [
			'user' => $user,
			'token' => $token
		];

		return response($response, 200);
	}

    /**
     * Display the specified resource.
     *
     * @param  string  $username
     * @return Response
     */
    public function show(string $username)
		{
        return User::where('username', $username)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  string  $username
     * @return Response
     */
    public function update(Request $request, $username)
    {
			if (User::where('username', $username)->first()) {
				$user = User::where('username', $username)->first();
				$user->update($request->all());
				return $user;
			}
			return response('User does not exist', 418);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $username
     * @return string
		 */
    public function destroy($username)
    {
			if (User::where('username', $username)->first()) {
				User::where('username', $username)->first()->delete();
				return $username.' deleted';
			}
				return 'User does not exist';
    }

		/**
		 * Search by username.
		 *
		 * @param  string  $username
		 * @return string
		 */
		public function search($username)
		{
			return User::where('username', 'like', '%'.$username.'%')->get();
		}

	/**
	 * Logout user.
	 *
	 * @param Request $request
	 * @return response
	 */
	public function logout(Request $request)
	{
		auth()->user()->tokens()->delete();

		return response([
			'message' => 'Logged out'
		]);
	}
}
