import CommentType from '@/types/Comment'
import DangerButton from './DangerButton'
import { router, usePage } from '@inertiajs/react';

const Comment = ({ comment, postAuthor }: { comment: CommentType, postAuthor: number }) => {
  const user = usePage().props.auth.user;

  function deleteComment(id: number) {
    if(window.confirm("Are you sure you want to delete this comment?")) {
      router.delete(`/comments/${id}`, {
        onSuccess: () => {
          router.reload();
        },
        onError: (errors) => {
          window.alert(JSON.stringify(errors.message));
        }
      });
    }
  }

  return (
    <div className='w-full p-4 flex flex-col gap-2 bg-white rounded-lg'>
        <div className="flex items-center justify-between gap-2">
            <span className="font-semibold">{comment.user ? comment.user.name : 'Guest'}</span>
            <div className="ms-auto flex gap-4 items-center ">
              {/* comment owner or post owner can delete comments */}
              {((user && user.id === comment.user?.id) || (user && user.id === postAuthor)) && (
                <DangerButton onClick={() => deleteComment(comment.id)} className="text-sm px-2 py-1">
                  Delete
                </DangerButton>
              )}
              
              <span className="text-sm text-gray-500 ms-auto">
                {new Date(comment.created_at).toLocaleString()}
              </span>
            </div>
        </div>

        <p>{comment.comment}</p>

    </div>
  )
}

export default Comment