import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import UserUpdatepost from "../UserUpdatePost";

const UsersPost: React.FC<{ post: any; indexPost: number }> = (props) => {
  console.log(props.post);
  const auth = useContext(AuthContext);
  const [update, setUpdate] = useState(false);
  if (update) {
    // store.copyPost(props.post, props.indexPost);
    return (
      <UserUpdatepost id={props.post._id} setUpdate={setUpdate} />
      //   <div>
      //     <button onClick={() => setUpdate(!update)}>Update</button>
      //     <input value={props.post.title} onChange={(e) => store.addField(e)} />
      //     {props.post.url.map((link: any, index: number) => (
      //       <div>
      //         <img key={props.post.images[index] + index} src={link} />
      //         <button
      //           onClick={() =>
      //             store.addDeleteImage(props.post.images[index], props.indexPost)
      //           }
      //         >
      //           Delete
      //         </button>
      //       </div>
      //     ))}
      //     <input
      //       className="custom-file-input"
      //       value=""
      //       type="file"
      //       name="file"
      //       multiple
      //       accept="image/png, image/jpeg"
      //       onChange={(event) => {
      //         store.addImage(event);
      //         console.log(event);
      //       }}
      //     />
      //     {store.files.map((img, index) => (
      //       <div key={"Images" + index} className="ImageChoose">
      //         <img alt="uploadImage" src={URL.createObjectURL(img)} />
      //         <div
      //           className="Button_Delete"
      //           onClick={() => {
      //             store.cleanSelectedImage(index);
      //           }}
      //         >
      //           Clear
      //         </div>
      //       </div>
      //     ))}
      //     <button
      //       onClick={() => {
      //         console.log("CLick");
      //         store.updatePost(auth?.token);
      //       }}
      //     >
      //       Update Post
      //     </button>
      //   </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => {
            setUpdate(!update);
            store.setDeltedId(props.post._id);
          }}
        >
          Update
        </button>
        <input value={props.post.title} disabled />
        {props.post.url.map((link: any, index: number) => (
          <div>
            <img key={index + link} src={link} />
          </div>
        ))}
      </div>
    );
  }
};

export default observer(UsersPost);
