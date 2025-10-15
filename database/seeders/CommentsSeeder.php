<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $comments = [
            [
                'comment' => 'Great post!',
                'user_id' => 2,
                'post_id' => 1
            ],
            [
                'comment' => 'Thanks for sharing.',
                'user_id' => 3,
                'post_id' => 1
            ],
            [
                'comment' => 'Interesting read.',
                'user_id' => 1,
                'post_id' => 2
            ]
        ];

        foreach ($comments as $comment) {
            Comment::create($comment);
        }
    }
}
