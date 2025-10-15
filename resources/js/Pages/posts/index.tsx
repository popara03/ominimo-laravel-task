import Card from '@/Components/Card'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Post from '@/types/Post'

const Posts = ({ posts } : {posts : Post[]}) => {
  return (
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Posts
            </h2>
        }
    >
        <Head title="Posts" />

        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-wrap gap-4">
                {posts.map((post:any) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default Posts