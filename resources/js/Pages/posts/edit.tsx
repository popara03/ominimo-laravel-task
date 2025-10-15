import PrimaryButton from "@/Components/PrimaryButton"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import Post from "@/types/Post"
import { Form, Head } from "@inertiajs/react"

const Update = ({ post } : { post: Post }) => {
  return (
    <div>
      <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Update post
                </h2>
            }
        >
            <Head title="Update Post" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-wrap gap-4">
                    <Form 
                      method="put"
                      action={`/posts/${post.id}`}
                      className="w-full flex flex-col gap-4"
                      onSuccess={() => {
                        alert('Post updated successfully!');
                      }}
                      resetOnSuccess
                      onError={(e) => {
                        alert('Failed to update post. '+JSON.stringify(e));
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="font-medium text-gray-700">
                          Title
                        </label>

                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="border border-gray-300 rounded-md p-2"
                          required
                          defaultValue={post.title}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="content" className="font-medium text-gray-700">
                          Content
                        </label>

                        <textarea
                          id="content"
                          name="content"
                          className="border border-gray-300 rounded-md p-2"
                          rows={5}
                          required
                          defaultValue={post.content}
                        />
                      </div>

                      <PrimaryButton type="submit">
                        Update Post
                      </PrimaryButton>
                    </Form>
                </div>
            </div>
        </AuthenticatedLayout>
    </div>
  )
}

export default Update