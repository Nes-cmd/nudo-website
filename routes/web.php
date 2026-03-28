<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\Dashboard\BusinessAdminController;
use App\Http\Controllers\Dashboard\HeroImageController;
use App\Models\Business;
use App\Models\HeroImage;
use App\Models\Room;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public site routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/businesses', [BusinessController::class, 'index'])->name('businesses.index');
Route::get('/businesses/{business}', [BusinessController::class, 'show'])->name('businesses.show');
Route::get('/open-rooms', [RoomController::class, 'index'])->name('rooms.index');
Route::get('/open-rooms/{room}', [RoomController::class, 'show'])->name('rooms.show');

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    // Profile is available to all authenticated users
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin-only dashboard & management
    Route::middleware(['admin'])->group(function () {
        Route::get('/dashboard', function () {
            $heroes = HeroImage::orderBy('sort')
                ->orderByDesc('created_at')
                ->get();

            return Inertia::render('Dashboard', [
                'heroes' => $heroes,
                'stats' => [
                    'businesses' => Business::count(),
                    'rooms' => Room::count(),
                    // Static display values — adjust here or move to config when you have real sources
                    'totalRooms' => 120,
                    'customersIn' => 42,
                    'customersOut' => 38,
                ],
            ]);
        })->name('dashboard');

        Route::get('/dashboard/businesses', [BusinessAdminController::class, 'index'])->name('dashboard.businesses.index');
        Route::get('/dashboard/businesses/{business}/edit', [BusinessAdminController::class, 'edit'])->name('dashboard.businesses.edit');
        Route::get('/dashboard/businesses/{business}', [BusinessAdminController::class, 'show'])->name('dashboard.businesses.show');
        Route::post('/dashboard/businesses', [BusinessAdminController::class, 'store'])->name('dashboard.businesses.store');
        Route::patch('/dashboard/businesses/{business}', [BusinessAdminController::class, 'update'])->name('dashboard.businesses.update');
        Route::delete('/dashboard/businesses/{business}', [BusinessAdminController::class, 'destroy'])->name('dashboard.businesses.destroy');

        Route::post('/dashboard/hero-images', [HeroImageController::class, 'store'])->name('dashboard.hero-images.store');
        Route::patch('/dashboard/hero-images/{heroImage}', [HeroImageController::class, 'update'])->name('dashboard.hero-images.update');
        Route::delete('/dashboard/hero-images/{heroImage}', [HeroImageController::class, 'destroy'])->name('dashboard.hero-images.destroy');
    });
});

require __DIR__ . '/auth.php';
