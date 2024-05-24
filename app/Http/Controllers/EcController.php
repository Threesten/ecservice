<?php

namespace App\Http\Controllers;

use App\Models\Ec;
use App\Http\Requests\StoreEcRequest;
use App\Http\Requests\UpdateEcRequest;
use App\Http\Resources\EcResource;
use Inertia\Inertia;

class EcController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $query = Ec::query();
        $ecs = $query->paginate(5);
        return Inertia::render("Ec/Index",[
            "ecs" => EcResource::collection($ecs),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Ec/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEcRequest $request)
    {

        Ec::create($request->all());
    
        return to_route('ec.index')->with('success', 'Element created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ec $ec)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ec $ec)
    {
        return inertia('Ec/Edit', [
            'ec' => new EcResource($ec),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEcRequest $request, Ec $ec)
    {
        $data = $request->validated();
        $ec->update($data);

        return to_route('ec.index')->with('success',"Project \"$ec->nom_element\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ec $ec)
    {
        $nom_element = $ec->nom_element;
        $ec->delete();
        return to_route('ec.index')
            ->with('success', "\"$nom_element\" was deleted");
    }
}
