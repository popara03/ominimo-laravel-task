<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

// Posts routes
Route::get('/', [PostController::class, 'index'])
    ->name('posts');

Route::middleware(['auth'])->group(function (){
    Route::get('/posts/create', [PostController::class, 'create'])
        ->name('posts.create');
    Route::post('/posts', [PostController::class, 'store']);
    
    Route::get('/posts/{id}/edit', [PostController::class, 'edit'])
        ->name('posts.edit');
    Route::put('/posts/{id}', [PostController::class, 'update']);
    
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);
});

Route::get('/posts/{id}', [PostController::class, 'show']);

// Comments routes
Route::post('/posts/{id}/comments', [CommentController::class, 'store']);
Route::delete('/comments/{id}', [CommentController::class, 'destroy']);

require __DIR__.'/auth.php';