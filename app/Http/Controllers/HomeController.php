<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Room;
use App\Models\Business;

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
            ->get();

        return Inertia::render('Home', [
            'rooms' => $rooms,
            'businesses' => $businesses,
        ]);
    }
}
