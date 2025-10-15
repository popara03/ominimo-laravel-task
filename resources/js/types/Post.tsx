import Comment from "./Comment";

type Post = {
    id: number;
    title: string;
    content: string;
    created_at: string;
    user: {
        id: number;
        name: string;
    };
    comments?: Comment[];
}

export default Post;