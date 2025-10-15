import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Form, Head, Link, router } from '@inertiajs/react'
import Post from "@/types/Post"
import PrimaryButton from "@/Components/PrimaryButton"
import DangerButton from "@/Components/DangerButton"
import Card from "@/Components/Card"
import Comment from "@/Components/Comment"
import { Input } from "@headlessui/react"

const PostPreview = ({post, auth} : {post:Post, auth:any}) => {
    async function deletePost(id:number){
        if(window.confirm("Are you sure you want to delete this post?")){
            router.delete(`/posts/${id}`, {
            onSuccess: () => {
                router.visit(route(`posts/${id}`));
            },
            onError: (error) => {
                window.alert(JSON.stringify(error));
            }
        });
        }
    }

    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Post preview
                    </h2>
                }
            >
                <Head title="Posts" />

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 flex flex-col gap-4">
                    {auth.user && auth.user.id === post.user.id && (
                        <div className="ms-auto flex items-center gap-2">
                            <PrimaryButton className="ms-auto">
                                <Link href={`/posts/${post.id}/edit`}>Edit</Link>
                            </PrimaryButton>

                            <DangerButton className="ms-auto" onClick={()=>{deletePost(post.id)}}>
                                Delete
                            </DangerButton>
                        </div>
                    )}

                    <Card post={post} isFullscreen={true} />

                    <hr />

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Comments</h3>

                        <Form
                        method="post"
                        action={`/posts/${post.id}/comments`}
                        className="flex gap-2"
                        resetOnSuccess
                        >
                            <Input type="text" name="comment" placeholder="Add comment" className="w-full border rounded-lg bg-white p-2" required />
                            <PrimaryButton type="submit" className="w-fit">Submit</PrimaryButton>
                        </Form>

                        {post.comments && post.comments.length > 0 ? (
                            post.comments.map((comment) => (
                                <Comment key={comment.id} comment={comment} postAuthor={post.user.id} />
                            ))
                        ) : (
                            <div>No comments yet.</div>
                        )}
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    )
}

export default PostPreview