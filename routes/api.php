<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Public Routes
Route::apiResource('posts', PostController::class, [
	'only' => ['show', 'index']
]);
Route::apiResource('user', UserController::class, [
	'only' => ['show', 'store']
]);
Route::post('/login', [UserController::class, 'login']);
Route::get('/user/search/{username}', [UserController::class, 'search']);
Route::apiResource('comments', CommentController::class, [
	'only' => ['show']
]);
Route::apiResource('tags', TagController::class, [
	'only' => ['show']
]);

//Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function(){
	Route::apiResource('posts', PostController::class, [
		'except' => ['show', 'index']
	]);
	Route::apiResource('user', UserController::class, [
		'except' => ['show', 'store']
	]);
	Route::post('/logout', [UserController::class, 'logout']);
	Route::apiResource('comments', CommentController::class, [
		'except' => ['show']
	]);
	Route::apiResource('tags', TagController::class, [
		'except' => ['show']
	]);
});
