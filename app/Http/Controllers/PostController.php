<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('user')->get();
        return Inertia::render('posts/index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('posts/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        try{
            $post = new Post();
            $post->title = $request->input('title');
            $post->content = $request->input('content');
            $post->user_id = $request->user()->id;

            $post->save();

            return redirect()->route('posts');
        }
        catch(Exception $e){
            return back()->with('error', 'Error creating post: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::findOrFail($id)->load(['user', 'comments.user']);
        return Inertia::render("posts/postPreview", [
            'post' => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('posts/edit', [
            'post' => Post::findOrFail($id)->load('user')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        try{
            $post = Post::findOrFail($id);
            $this->authorize('update', $post);

            $post->title = $request->input('title');
            $post->content = $request->input('content');
            $post->save();

            return redirect()->route('posts');
        }
        catch(Exception $e){
            throw new Exception($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $post = Post::findOrFail($id);
            $this->authorize('delete', $post);

            $post->delete();

            return redirect()->route('posts');
        }
        catch(Exception $e){
            return back()->with('error', 'Error deleting post: ' . $e->getMessage());
        }
    }
}