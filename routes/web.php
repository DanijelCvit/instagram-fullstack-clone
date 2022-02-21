<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

function getUserPosts()
{
    $results = DB::select('select * from users where id = ?', [10000]);
    return $results;
}

Route::get("/posts2/", function(){
    return getUserPosts();
});

Route::get("/posts/", function(){
    $results =DB::select('select * from users where id = ?', [10000]);
    return $results;
});
//Route::get("/:id", getUser());
//Route::post("/", upload.single("uploaded_file"), createUser);
//Route::patch("/:id", upload.single("uploaded_file"), updateUser);
//Route::delete("/:id", deleteUser);
