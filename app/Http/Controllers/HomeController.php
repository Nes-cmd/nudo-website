<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Room;
use App\Models\Business;
use App\Models\HeroImage;

class HomeController extends Controller
{
    /**
     * Display the home page with featured rooms and businesses
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $rooms = Room::where('available', true)
            ->limit(6)
            ->get();

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
        ]);
    }
}
