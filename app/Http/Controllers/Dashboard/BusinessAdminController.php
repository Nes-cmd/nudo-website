<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Business;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessAdminController extends Controller
{
    public function index()
    {
        $businesses = Business::orderBy('sort')
            ->orderByDesc('created_at')
            ->paginate(10);

        return Inertia::render('Dashboard/Businesses/Index', [
            'businesses' => $businesses,
        ]);
    }

    public function show(Business $business)
    {
        return Inertia::render('Dashboard/Businesses/Show', [
            'business' => $business,
        ]);
    }

    public function edit(Business $business)
    {
        return Inertia::render('Dashboard/Businesses/Edit', [
            'business' => $business,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'category' => ['required', 'string', 'max:255'],
            'image' => ['nullable', 'array'],
            'image.*' => ['image', 'max:2048'],
            'website' => ['nullable', 'string', 'max:255'],
            'sort' => ['nullable', 'integer'],
            'services' => ['nullable', 'array'],
            'services.*' => ['string', 'max:255'],
            'available' => ['boolean'],
        ]);

        $data['available'] = $data['available'] ?? false;

        if ($request->hasFile('image')) {
            $paths = [];
            foreach ($request->file('image') as $file) {
                $paths[] = $file->store('businesses', 'public');
            }
            $data['image'] = $paths;
        }

        Business::create($data);

        return redirect()->route('dashboard.businesses.index');
    }

    public function update(Request $request, Business $business)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'category' => ['required', 'string', 'max:255'],
            // On update we accept an uploaded file array or keep existing images.
            'keep_images' => ['nullable', 'array'],
            'keep_images.*' => ['string'],
            'image' => ['nullable', 'array'],
            'image.*' => ['image', 'max:2048'],
            'website' => ['nullable', 'string', 'max:255'],
            'sort' => ['nullable', 'integer'],
            'services' => ['nullable', 'array'],
            'services.*' => ['string', 'max:255'],
            'available' => ['boolean'],
        ]);

        $data['available'] = $data['available'] ?? false;

        $keep = $data['keep_images'] ?? [];
        unset($data['keep_images']);

        $images = $keep;

        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $file) {
                $images[] = $file->store('businesses', 'public');
            }
        }

        if (!empty($images)) {
            $data['image'] = $images;
        } else {
            unset($data['image']); // no change if nothing kept or uploaded
        }

        $business->update($data);

        return redirect()->route('dashboard.businesses.index');
    }

    public function destroy(Business $business)
    {
        $business->delete();

        return redirect()->route('dashboard.businesses.index');
    }
}

