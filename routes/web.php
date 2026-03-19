<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\Dashboard\BusinessAdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public site routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/businesses', [BusinessController::class, 'index'])->name('businesses.index');
Route::get('/open-rooms', [RoomController::class, 'index'])->name('rooms.index');
Route::get('/open-rooms/{room}', [RoomController::class, 'show'])->name('rooms.show');

// Authenticated dashboard & profile (from Breeze)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/dashboard/businesses', [BusinessAdminController::class, 'index'])->name('dashboard.businesses.index');
    Route::get('/dashboard/businesses/{business}/edit', [BusinessAdminController::class, 'edit'])->name('dashboard.businesses.edit');
    Route::get('/dashboard/businesses/{business}', [BusinessAdminController::class, 'show'])->name('dashboard.businesses.show');
    Route::post('/dashboard/businesses', [BusinessAdminController::class, 'store'])->name('dashboard.businesses.store');
    Route::patch('/dashboard/businesses/{business}', [BusinessAdminController::class, 'update'])->name('dashboard.businesses.update');
    Route::delete('/dashboard/businesses/{business}', [BusinessAdminController::class, 'destroy'])->name('dashboard.businesses.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
