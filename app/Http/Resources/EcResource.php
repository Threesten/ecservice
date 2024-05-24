<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EcResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "code_element"=> $this->code_element,
            "nom_element"=> $this->nom_element,
            "codeprof"=> $this->codeprof,
            "coeff"=> $this->coeff,
        ];
    }
}
