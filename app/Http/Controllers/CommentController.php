<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $id)
    {
        try{
            $post = Post::findOrFail($id);

            $request->validate([
                'comment' => 'required|string|min:2|max:1000',
            ]);

            Comment::create([
                'post_id' => $post->id,
                'user_id' => $request->user()->id ?? null,
                'comment' => $request->comment,
            ]);

            return back()->with('success', 'Comment added successfully.');
        }
        catch(Exception $e){
            throw new Exception($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $comment = Comment::findOrFail($id);

            $this->authorize('delete', $comment);

            $comment->delete();

            return back()->with('message', 'Comment deleted successfully.');
        }
        catch(AuthorizationException $e){
            return back()->withErrors(['message' => 'You are not authorized to delete this comment.']);
        }
        catch(Exception $e){
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}