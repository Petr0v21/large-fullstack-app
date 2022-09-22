import { useCallback, useEffect } from "react";

const storageName = "selectedPosts";

export const useSelect = () => {
  let ids: string[] = [];

  const addId = useCallback((idPost: string) => {
    ids.push(idPost);
    if (ids.length <= 5) {
      localStorage.setItem(
        storageName,
        JSON.stringify({
          ids: ids,
        })
      );
      console.log(localStorage);
    } else {
      alert("You have max number selected posts");
    }
  }, []);
  const deleteId = useCallback((idPost: string) => {
    ids = ids.filter((id) => id !== idPost);
    localStorage.setItem(
      storageName,
      JSON.stringify({
        ids: ids,
      })
    );
    console.log(localStorage);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(storageName)) {
      const data = JSON.parse(localStorage.getItem(storageName) as string);
      if (data && data.ids) {
        ids = data.ids;
      }
    }
  }, [addId, deleteId]);

  return { addId, deleteId };
};
