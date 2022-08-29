import SelectedPost from "../../app/component/SelectedPost";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import store from "../../stores/selectedStore";
import PostsContext from "../../context/PostsContext";

const FormPost: React.FC = () => {
  const context = useContext(PostsContext);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("selectedPosts") as string);
    if (data && data.ids.length !== 0) store.getList(data.ids);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          context?.addId("630cf43fd9599cb159c63f93");
        }}
      >
        Clck
      </button>
      {store.list.map((post) => (
        <div key={post._id}>
          {post.title}
          <div className="galary">
            {post.url.map((link: any) => (
              <img key={link} src={link} />
            ))}
          </div>
          {/* <SelectedPost post={} /> */}
        </div>
      ))}
      <div className="Pages">
        {store.pages.map((page) => (
          <div
            key={page}
            onClick={() => store.changePage(page)}
            className="PageButton"
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(FormPost);
