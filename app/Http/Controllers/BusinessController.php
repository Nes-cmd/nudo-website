<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Business;

class BusinessController extends Controller
{
    /**
     * Display a listing of businesses
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $businesses = Business::where('available', true)->get();

        return Inertia::render('Businesses', [
            'businesses' => $businesses,
        ]);
    }
}
