<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plantrequest;
use App\Models\Plant;
use App\Models\PlantImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PlantsController extends Controller
{

    public function index()
    {
        $plants = Plant::with('category', 'images')->get();
        return response()->json($plants);
    }
    public function store(Plantrequest $request)
    {
        $thumbnailPath = $request->file('thumbnail')->store('plants', 'public');
        $thumbnailUrl = Storage::url($thumbnailPath);

        // Create the plant with the thumbnail
        $plant = Plant::create([
            'title' => $request->title,
            'descreption' => $request->descreption,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'thumbnail' => $thumbnailUrl,
        ]);

        // Save additional images (optional)
        if ($request->hasFile('images')) {
            logger('Images found:', $request->file('images'));

            foreach ($request->file('images') as $image) {
                $imagePath = $image->store('plants', 'public');
                $imageUrl = Storage::url($imagePath);

                PlantImage::create([
                    'plant_id' => $plant->id,
                    'image_url' => $imageUrl,
                ]);
            }
        }
    }
    public function show($id)
    {
        $plant = Plant::with('category', 'images')->findOrFail($id);
        return response()->json($plant);
    }
    public function update(Request $request, $id)
    {
        $plant = Plant::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string',
            'descreption' => 'sometimes|string',
            'price' => 'sometimes|numeric',
            'thumbnail' => 'nullable|string',
            'category_id' => 'sometimes|exists:categories,id',
        ]);

        $plant->update($validated);
        return response()->json($plant);
    }
    public function destroy($id)
    {
        $plant = Plant::findOrFail($id);
        $plant->delete();

        return response()->json(['message' => 'Plant deleted successfully']);
    }
}
