<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Room;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rooms = [
            [
                'name' => 'Executive Suite',
                'description' => 'Premium meeting space with modern amenities',
                'size' => '500 sq ft',
                'capacity' => 20,
                'floor' => '3rd Floor',
                'price' => '45,000',
                'period' => 'per month',
                'features' => ['Projector', 'WiFi', 'Catering'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Conference Hall',
                'description' => 'Large space perfect for presentations and events',
                'size' => '800 sq ft',
                'capacity' => 50,
                'floor' => '1st Floor',
                'price' => '75,000',
                'period' => 'per month',
                'features' => ['Stage', 'Sound System', 'WiFi'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Boardroom',
                'description' => 'Elegant space for executive meetings',
                'size' => '400 sq ft',
                'capacity' => 12,
                'floor' => '4th Floor',
                'price' => '36,000',
                'period' => 'per month',
                'features' => ['Video Conferencing', 'Whiteboard', 'WiFi'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Workshop Space',
                'description' => 'Flexible area for training and workshops',
                'size' => '600 sq ft',
                'capacity' => 30,
                'floor' => '2nd Floor',
                'price' => '54,000',
                'period' => 'per month',
                'features' => ['Movable Furniture', 'Projector', 'WiFi'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Creative Studio',
                'description' => 'Bright space ideal for design and creative work',
                'size' => '450 sq ft',
                'capacity' => 15,
                'floor' => '5th Floor',
                'price' => '42,000',
                'period' => 'per month',
                'features' => ['Natural Light', 'Whiteboard', 'WiFi'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Collaboration Room',
                'description' => 'Modern space designed for team collaboration',
                'size' => '350 sq ft',
                'capacity' => 10,
                'floor' => '2nd Floor',
                'price' => '30,000',
                'period' => 'per month',
                'features' => ['Smart Board', 'Video Call Setup', 'WiFi'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1591058/pexels-photo-1591058.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Training Center',
                'description' => 'Spacious room perfect for seminars and training sessions',
                'size' => '700 sq ft',
                'capacity' => 40,
                'floor' => '3rd Floor',
                'price' => '60,000',
                'period' => 'per month',
                'features' => ['Projector', 'Sound System', 'WiFi', 'Breakout Areas'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1591057/pexels-photo-1591057.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Private Office',
                'description' => 'Quiet space for focused work and small meetings',
                'size' => '300 sq ft',
                'capacity' => 6,
                'floor' => '4th Floor',
                'price' => '28,000',
                'period' => 'per month',
                'features' => ['Desk Setup', 'WiFi', 'Phone Line'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
            [
                'name' => 'Event Hall',
                'description' => 'Grand space for large events and celebrations',
                'size' => '1,200 sq ft',
                'capacity' => 100,
                'floor' => 'Ground Floor',
                'price' => '120,000',
                'period' => 'per month',
                'features' => ['Stage', 'Lighting System', 'Sound System', 'Catering Kitchen'],
                'available' => true,
                'image' => 'https://images.pexels.com/photos/1591059/pexels-photo-1591059.jpeg?auto=compress&cs=tinysrgb&w=800',
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}
