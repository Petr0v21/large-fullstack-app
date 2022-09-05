import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FormComment from "../FormComment";
import commentSstore from "../../../stores/commentStore";
import postStore from "../../../stores/listStore";

const UsersPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    postStore.getPost(id!);
  }, []);
  return (
    <div>
      <div className="full-post-content">
        <div className="post-gallary">
          {postStore.post.url.map((link: any, index: number) => (
            <img src={link} key={"image" + link} />
          ))}
        </div>
        <h2>{postStore.post.title}</h2>
        <label>{postStore.post.category}</label>
        <label>{postStore.post.location}</label>
        <label>{postStore.post.description}</label>
      </div>
      <div className="comment-container">
        <h3>Залишити коментар</h3>
        <FormComment id={id!} />
      </div>
    </div>
  );
};

export default observer(UsersPost);
