<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PlantsController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::controller(UserController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout')->middleware('auth:sanctum');
    Route::get('/google-login', 'googleLogin');
});
Route::controller(PlantsController::class)->group(function () {
    Route::post('/createplant', 'store');
    Route::get('/getplant/{id}', 'show');
    Route::put('/updateplant/{id}', 'update');
    Route::delete('/plant/{id}', 'destroy');
    Route::get('/getplants', 'index');
});
Route::post('/create-category', [CategoryController::class, 'store']);

Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])
    ->middleware(['signed'])
    ->name('verification.verify');
