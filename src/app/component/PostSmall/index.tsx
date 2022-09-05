import React from "react";
import { Link } from "react-router-dom";

const PostSmall: React.FC<{ post: any }> = (props) => {
  console.log(props.post);
  return (
    <div className="post-small">
      <img src={props.post.url[0]} />
      <div className="post-small-content">
        <div className="rating">
          <h4>{props.post.rating.average}</h4>
          <label>К-ть:{props.post.rating.amount}</label>
        </div>
        <Link to={`${props.post._id}`}>{props.post.title}</Link>
        <div className="post-small-tags">
          <label>{props.post.category}</label>
          <label>{props.post.location}</label>
        </div>
      </div>
      <h3>{props.post.price}</h3>
      <div className="post-small-owner"></div>
    </div>
  );
};

export default PostSmall;
