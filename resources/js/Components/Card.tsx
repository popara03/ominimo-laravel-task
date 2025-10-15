import Post from "@/types/Post"

const Card = ({ post, isFullscreen = false } : { post: Post, isFullscreen? : boolean }) => {
  return (
    <div key={post.id} className={`${isFullscreen ? '!w-full' : 'w-full md:w-96'} p-4 flex flex-col gap-2 bg-white shadow-sm rounded-lg`}>
        <div className="flex flex-col">
            <div className="flex items-center justify-between gap-2">
                <span className="text-sm text-gray-500">{post.user.name}</span>
                <span className="text-sm text-gray-500 ms-auto">
                    {new Date(post.created_at).toLocaleString()}
                </span>
            </div>
            {!isFullscreen ? (
                <a href={`/posts/${post.id}`} className="w-fit text-lg font-semibold hover:text-blue-500">{post.title}</a>
            ) : (
                <h3 className="text-lg font-semibold">{post.title}</h3>
            )}
        </div>
        
        <hr />
        
        <p>{post.content}</p>
    </div>
  )
}

export default Card