<?php

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::controller(App\Http\Controllers\CalendarController::class)->group(function(){
    Route::get('calendar/create', 'add')->name('calendar.add');
});

Route::get('ajax/memo', [App\Http\Controllers\Ajax\MemoController::class, 'index'])->name('ajax_memo');