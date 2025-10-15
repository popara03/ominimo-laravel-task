import PrimaryButton from "@/Components/PrimaryButton"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Form, Head } from "@inertiajs/react"

const Create = () => {
  return (
    <div>
      <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create post
                </h2>
            }
        >
            <Head title="Create Post" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-wrap gap-4">
                    <Form 
                      method="post"
                      action={'/posts'}
                      className="w-full flex flex-col gap-4"
                      onSuccess={() => {
                        alert('Post created successfully!');
                      }}
                      resetOnSuccess
                      onError={(e) => {
                        alert('Failed to create post. '+JSON.stringify(e));
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
                        />
                      </div>

                      <PrimaryButton type="submit">
                        Create Post
                      </PrimaryButton>
                    </Form>
                </div>
            </div>
        </AuthenticatedLayout>
    </div>
  )
}

export default Create