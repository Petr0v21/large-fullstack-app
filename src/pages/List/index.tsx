import FullPost from "../../app/component/FullPost";
import PostSmall from "../../app/component/PostSmall";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import store from "../../stores/listStore";
import { Route, Routes } from "react-router";

const ListPost: React.FC = () => {
  useEffect(() => {
    store.getList();
  }, []);
  return (
    <div className="client-see-body">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <div>Sorting</div>
              {store.list.map((post) => (
                <PostSmall key={post._id} post={post} />
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
            </>
          }
        />
        <Route path=":id" element={<FullPost />} />
      </Routes>
    </div>
  );
};

export default observer(ListPost);
