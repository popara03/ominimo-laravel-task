type Comment = {
  id: number;
  post_id: number;
  user?: {
    id: number;
    name: string;
  };
  comment: string;
  created_at: string;
}

export default Comment;