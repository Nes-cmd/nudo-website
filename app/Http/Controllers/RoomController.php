<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class RoomController extends Controller
{
    /**
     * Fetch a paginated page of available units from the external management API.
     *
     * @param  int  $page
     * @return array{
     *     items: array<int, array<string, mixed>>,
     *     meta: array<string, mixed>,
     *     links: array<int, array<string, mixed>>
     * }
     */
    protected function fetchAvailableUnitsPage(int $page = 1): array
    {
        // Samole Response
        /*
        {
        "current_page": 1,
        "data": [
            {
            "id": 456,
            "title": "202",
            "price": "14158.80",
            "status": "Available",
            "area_sqm": "30.78",
            "price_per_sqm": "460.00",
            "tax_included": 1,
            "price_base": "Area Based",
            "floor": 2,
            "property_id": 21,
            "floor_name": "2nd floor",
            "tax_amount": 2123.8199999999997,
            "total_amount": 16282.619999999999,
            "images": [
                "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
            ],
            "property": {
                "id": 21,
                "title": "Peacelando Trading PLC",
                "category_id": 1,
                "category": {
                "id": 1,
                "name": {
                    "en": "Commercial Building",
                    "am": "የንግድ ህንጻ"
                },
                "images": [
                        "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
                    ],
                }
            },
            "rooms": [
                {
                "id": 525,
                "title": "202",
                "property_unit_id": 456
                },
                {
                "id": 590,
                "title": "202",
                "property_unit_id": 456
                }
            ]
            },
            {
            "id": 462,
            "title": "802",
            "price": "34782.61",
            "status": "Available",
            "area_sqm": "136.44",
            "price_per_sqm": "0.00",
            "tax_included": 1,
            "price_base": "Fixed",
            "floor": 8,
            "property_id": 21,
            "floor_name": "8th floor",
            "tax_amount": 5217.3915,
            "total_amount": 40000.0015,
            "images": [
                "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
            ],
            "property": {
                "id": 21,
                "title": "Peacelando Trading PLC",
                "category_id": 1,
                "category": {
                "id": 1,
                "name": {
                    "en": "Commercial Building",
                    "am": "የንግድ ህንጻ"
                },
                "images": [
                    "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
                ]
                }
            },
            "rooms": [
                {
                "id": 532,
                "title": "Bedroom-1",
                "property_unit_id": 462
                },
                {
                "id": 562,
                "title": "Bedroom-2",
                "property_unit_id": 462
                },
                {
                "id": 563,
                "title": "Bedroom-3",
                "property_unit_id": 462
                }
            ]
            },
            {
            "id": 464,
            "title": "704",
            "price": "21739.13",
            "status": "Available",
            "area_sqm": "81.24",
            "price_per_sqm": "0.00",
            "tax_included": 1,
            "price_base": "Fixed",
            "floor": 7,
            "property_id": 21,
            "floor_name": "7th floor",
            "tax_amount": 3260.8695000000002,
            "total_amount": 24999.9995,
            "images": [
                "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
            ],
            "property": {
                "id": 21,
                "title": "Peacelando Trading PLC",
                "category_id": 1,
                "images": [
                    "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
                ],
                "category": {
                "id": 1,
                "name": {
                    "en": "Commercial Building",
                    "am": "የንግድ ህንጻ"
                }
                }
            },
            "rooms": [
                {
                "id": 534,
                "title": "Bedroom-1",
                "property_unit_id": 464
                },
                {
                "id": 565,
                "title": "Bedroom-2",
                "property_unit_id": 464
                }
            ]
            },
            {
            "id": 476,
            "title": "የማስታወቂያ ግድግዳ",
            "price": "14850.00",
            "status": "Available",
            "area_sqm": "150",
            "price_per_sqm": "99.00",
            "tax_included": 1,
            "price_base": "Fixed",
            "floor": 0,
            "property_id": 21,
            "floor_name": "Ground floor",
            "tax_amount": 2227.5,
            "total_amount": 17077.5,
            "images": [
                "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
            ],
            "property": {
                "id": 21,
                "title": "Peacelando Trading PLC",
                "category_id": 1,
                "category": {
                "id": 1,
                "name": {
                    "en": "Commercial Building",
                    "am": "የንግድ ህንጻ"
                },
                "images": [
                    "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
                ]
                }
            },
            "rooms": [
                {
                "id": 572,
                "title": "የማስታወቂያ ግድግዳ",
                "property_unit_id": 476
                }
            ]
            },
            {
            "id": 4439,
            "title": "Parking Room at Basement",
            "price": "600.00",
            "status": "Available",
            "area_sqm": null,
            "price_per_sqm": null,
            "tax_included": 1,
            "price_base": "Fixed",
            "floor": -2,
            "property_id": 21,
            "floor_name": "Basement 2",
            "tax_amount": 90,
            "total_amount": 690,
            "images": [
                "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
            ],
            "property": {
                "id": 21,
                "title": "Peacelando Trading PLC",
                "category_id": 1,
                "category": {
                "id": 1,
                "name": {
                    "en": "Commercial Building",
                    "am": "የንግድ ህንጻ"
                },
                "images": [
                    "/01J2F2VRN7B8X6G5A7KMNWZWFH.jpeg"
                ]
                }
            },
            "rooms": [
                {
                "id": 2082,
                "title": "Parking",
                "property_unit_id": 4439
                },
                {
                "id": 2131,
                "title": "Parking Room at Basement",
                "property_unit_id": 4439
                }
            ]
            }
        ],
        "first_page_url": "http://nes-live.com:8000/api/partner/v1/companies/19/available-units?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://nes-live.com:8000/api/partner/v1/companies/19/available-units?page=1",
        "links": [
            {
            "url": null,
            "label": "&laquo; Previous",
            "page": null,
            "active": false
            },
            {
            "url": "http://nes-live.com:8000/api/partner/v1/companies/19/available-units?page=1",
            "label": "1",
            "page": 1,
            "active": true
            },
            {
            "url": null,
            "label": "Next &raquo;",
            "page": null,
            "active": false
            }
        ],
        "next_page_url": null,
        "path": "http://nes-live.com:8000/api/partner/v1/companies/19/available-units",
        "per_page": 50,
        "prev_page_url": null,
        "to": 5,
        "total": 5
        }
        */

        return Cache::remember('room-data', now()->addHour(), function() use($page){
            $baseUrl = rtrim(config('services.management.url', env('MANAGEMENT_URL', '')), '/');
            $companyId = config('services.management.company_id', env('COMPANY_ID'));
            $apiKey = config('services.management.api_key', env('API_KEY'));

            if (! $baseUrl || ! $companyId || ! $apiKey) {
                return [];
            }
           
            $url = "{$baseUrl}/api/partner/v1/companies/{$companyId}/available-units?page={$page}";

            $response = Http::withHeaders([
                'X-API-KEY' => $apiKey,
                'Accept' => 'application/json',
            ])->get($url);

            if (! $response->ok()) {
                // dd($response->status());
                return [
                    'items' => [],
                    'meta' => [],
                    'links' => [],
                ];
            }

            $data = $response->json();

            

            // API is paginated; rooms live under "data"
            $rawItems = is_array($data['data'] ?? null) ? $data['data'] : (is_array($data) ? $data : []);

            $items = array_map(function (array $unit) use ($baseUrl) {
                $rooms = is_array($unit['rooms'] ?? null) ? $unit['rooms'] : [];

                $features = array_values(array_filter(array_map(function ($room) {
                    return $room['title'] ?? null;
                }, $rooms)));

                $descriptionParts = [];
                if (! empty($unit['floor_name'])) {
                    $descriptionParts[] = $unit['floor_name'];
                }
                if (! empty($unit['area_sqm'])) {
                    $descriptionParts[] = $unit['area_sqm'] . ' m²';
                }

                // Prefer unit images; if none, fall back to property / category images
                $unitImages = is_array($unit['images'] ?? null) ? $unit['images'] : [];
                $propertyImages = is_array($unit['property']['images'] ?? null)
                    ? $unit['property']['images']
                    : (is_array($unit['property']['category']['images'] ?? null)
                        ? $unit['property']['category']['images']
                        : []);

                $rawImage = $unitImages[0] ?? ($propertyImages[0] ?? null);

                $image = null;
                if ($rawImage) {
                    $image = rtrim($baseUrl, '/') . '/storage/' . ltrim($rawImage, '/storage/');
                }

                return [
                    'id' => $unit['id'] ?? null,
                    'name' => $unit['title'] ?? 'Unit',
                    'description' => implode(' • ', $descriptionParts),
                    'image' => $image,
                    'floor' => $unit['floor_name'] ?? ($unit['floor'] ?? ''),
                    'size' => $unit['area_sqm'] ?? null,
                    'capacity' => null,
                    'features' => $features,
                    'price' => $unit['total_amount'] ?? ($unit['price'] ?? null),
                    'period' => 'በየወር',
                ];
            }, $rawItems);

            $meta = [
                'current_page' => $data['current_page'] ?? 1,
                'last_page' => $data['last_page'] ?? 1,
                'from' => $data['from'] ?? null,
                'to' => $data['to'] ?? null,
                'total' => $data['total'] ?? null,
                'per_page' => $data['per_page'] ?? null,
            ];

            $links = is_array($data['links'] ?? null) ? $data['links'] : [];

            return [
                'items' => $items,
                'meta' => $meta,
                'links' => $links,
            ];
         });
    }

    /**
     * Convenience helper when only the list of units is needed.
     *
     * @return array<int, array<string, mixed>>
     */
    public function fetchAvailableUnits(): array
    {
        $all = [];
        $pageNumber = 1;

        do {
            $page = $this->fetchAvailableUnitsPage($pageNumber);
            $items = $page['items'] ?? [];
            $all = array_merge($all, $items);

            $meta = $page['meta'] ?? [];
            $lastPage = $meta['last_page'] ?? $pageNumber;

            $pageNumber++;
        } while ($pageNumber <= $lastPage);

        return $all;
    }

    /**
     * Display a listing of available rooms
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $currentPage = (int) request()->query('page', 1);
        if ($currentPage < 1) {
            $currentPage = 1;
        }

        $page = $this->fetchAvailableUnitsPage($currentPage);

        return Inertia::render('OpenRooms', [
            'rooms' => [
                'data' => $page['items'],
                'links' => $page['links'],
                'current_page' => $page['meta']['current_page'] ?? 1,
                'last_page' => $page['meta']['last_page'] ?? 1,
                'from' => $page['meta']['from'] ?? null,
                'to' => $page['meta']['to'] ?? null,
                'total' => $page['meta']['total'] ?? null,
            ],
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
        $rooms = $this->fetchAvailableUnits();
        $room = collect($rooms)->firstWhere('id', $id);

        if (! $room) {
            abort(404);
        }

        $otherRooms = collect($rooms)
            ->where('id', '!=', $id)
            ->values()
            ->take(6)
            ->all();

        return Inertia::render('RoomDetail', [
            'room' => $room,
            'otherRooms' => $otherRooms,
        ]);
    }
}
