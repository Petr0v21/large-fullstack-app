import { createContext } from "react";

function noop() {}

interface PostsContextInterface {
  addId: Function;
  deleteId: Function;
}

const PostsContext = createContext<PostsContextInterface | null>({
  addId: noop,
  deleteId: noop,
});

export default PostsContext;
