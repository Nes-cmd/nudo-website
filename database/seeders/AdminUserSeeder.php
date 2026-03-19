<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Seed an admin user or promote an existing one.
     */
    public function run(): void
    {
        // Change this email to whatever you want to use as admin
        $email = config('app.admin_email', 'admin@nudomarket.com');

        $user = User::where('email', $email)->first();

        if (! $user) {
            $user = User::create([
                'name' => 'Nudo Admin',
                'email' => $email,
                'password' => Hash::make('password'),
                'is_admin' => true,
            ]);
        } else {
            $user->is_admin = true;
            $user->save();
        }
    }
}

