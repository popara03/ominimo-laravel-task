<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                'title' => 'First Post',
                'content' => 'This is the content of the first post.',
                'user_id' => 1
            ],
            [
                'title' => 'Second Post',
                'content' => 'This is the content of the second post.',
                'user_id' => 2
            ],
            [
                'title' => 'Third Post',
                'content' => 'This is the content of the third post.',
                'user_id' => 3
            ]
        ];

        foreach ($posts as $post) {
            Post::create($post);
        }
    }
}
