<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Room;

class RoomController extends Controller
{
    /**
     * Get all available rooms
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getRooms()
    {
        return Room::where('available', true)->get();
    }

    /**
     * Get limited rooms for preview (e.g., home page)
     *
     * @param int $limit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getLimitedRooms(int $limit = 6)
    {
        return Room::where('available', true)
            ->limit($limit)
            ->get();
    }

    /**
     * Display a listing of available rooms
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $rooms = $this->getRooms();

        return Inertia::render('OpenRooms', [
            'rooms' => $rooms,
        ]);
    }

    /**
     * Display the specified room
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $room = Room::where('available', true)->findOrFail($id);
        
        // Get other available rooms (excluding current one)
        $otherRooms = Room::where('available', true)
            ->where('id', '!=', $id)
            ->limit(6)
            ->get();

        return Inertia::render('RoomDetail', [
            'room' => $room,
            'otherRooms' => $otherRooms,
        ]);
    }
}
