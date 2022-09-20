import React, { useEffect } from "react";
import PostSmall from "../PostSmall";
import store from "../../../stores/listStore";

const OwnerPosts: React.FC<{ owner: any }> = (props) => {
  console.log(props.owner);
  useEffect(() => {
    store.getOwnerList(props.owner);
  }, []);
  return (
    <>
      {store.ownerPosts.map((post) => (
        <PostSmall key={post._id} post={post} />
      ))}
    </>
  );
};

export default OwnerPosts;
