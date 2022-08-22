import { observer } from "mobx-react";
import React from "react";
import store from "../../stores/listStore";

const FormPost: React.FC = () => {
  return (
    <div>
      {store.list.map((post) => (
        <div>{post.title}</div>
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
