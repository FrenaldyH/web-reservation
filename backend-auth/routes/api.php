<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::POST('/login', [AuthController::class, 'login']);
