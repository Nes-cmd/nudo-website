<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Business;
use App\Models\HeroImage;
use App\Http\Controllers\RoomController;

class HomeController extends Controller
{
    /**
     * Display the home page with featured rooms and businesses
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // Static tenant directory (Amharic) — edit config/market_directory.php
        // Fetch rooms from external management API via RoomController helper
        $roomController = app(RoomController::class);
        $allRooms = $roomController->fetchAvailableUnits();
        $rooms = array_slice($allRooms, 0, 6);

        $businesses = Business::where('available', true)
            ->limit(5)
            ->orderBy('sort')
            ->get();

        $heroes = HeroImage::where('active', true)
            ->orderBy('sort')
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('Home', [
            'rooms' => $rooms,
            'businesses' => $businesses,
            'heroes' => $heroes,
            'marketDirectory' => config('market_directory.categories', []),
        ]);
    }
}
