<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\HeroImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeroImageController extends Controller
{
    public function index()
    {
        $heroes = HeroImage::orderBy('sort')
            ->orderByDesc('created_at')
            ->paginate(10);

        return Inertia::render('Dashboard/HeroImages/Index', [
            'heroes' => $heroes,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['nullable', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'image' => ['required', 'image', 'max:2048'],
            'sort' => ['nullable', 'integer'],
            'active' => ['boolean'],
        ]);

        $data['active'] = $data['active'] ?? true;
        $data['sort'] = $data['sort'] ?? 0;
        $data['image'] = $request->file('image')->store('hero-images', 'public');

        HeroImage::create($data);

        return redirect()->route('dashboard');
    }

    public function update(Request $request, HeroImage $heroImage)
    {
        $data = $request->validate([
            'title' => ['nullable', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'max:2048'],
            'sort' => ['nullable', 'integer'],
            'active' => ['boolean'],
        ]);

        $data['active'] = $data['active'] ?? true;
        $data['sort'] = $data['sort'] ?? 0;

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('hero-images', 'public');
        } else {
            unset($data['image']);
        }

        $heroImage->update($data);

        return redirect()->route('dashboard');
    }

    public function destroy(HeroImage $heroImage)
    {
        $heroImage->delete();

        return redirect()->route('dashboard');
    }
}

