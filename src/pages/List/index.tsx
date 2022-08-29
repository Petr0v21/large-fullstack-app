import FormComment from "../../app/component/FormComment";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import store from "../../stores/listStore";

const FormPost: React.FC = () => {
  useEffect(() => {
    store.getList();
  }, []);
  return (
    <div>
      {store.list.map((post) => (
        <div key={post._id}>
          {post.title}
          <div className="galary">
            {post.url.map((link: any) => (
              <img key={link} src={link} />
            ))}
          </div>
          <FormComment id={post._id} />
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
