<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/auth/google/redirect', [UserController::class, "redirect"]);
Route::get('/auth/google/callback', [UserController::class, "callback"]);