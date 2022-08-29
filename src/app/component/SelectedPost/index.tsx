import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import store from "../../../stores/commentStore";
import UserUpdatepost from "../UserUpdatePost";

const SelectedPost: React.FC<{ post: any; indexPost: number }> = (props) => {
  console.log(props.post);
  return (
    <div>
      <input value={props.post.title} disabled />
      {props.post.url.map((link: any, index: number) => (
        <div>
          <img key={index + link} src={link} />
        </div>
      ))}
    </div>
  );
};

export default observer(SelectedPost);
