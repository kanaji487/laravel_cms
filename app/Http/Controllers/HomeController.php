<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenApi\Annotations as OA;

class HomeController extends Controller
{
    /**
     * @OA\Get(
     *     path="api/frontend/home",
     *     tags={"api/frontend"},
     *     summary="Get all users",
     *     operationId="Home",
     *     @OA\Response(response="200", description="Success")
     * )
     */
    public function index() {
        return User::all();
    }
}
