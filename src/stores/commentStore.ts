import { makeAutoObservable } from "mobx";

class CommentStore {
  comment = {
    id: "",
    rating: 0,
    email: "",
    name: "",
    text: "",
  };
  list: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  addField(event: any) {
    this.comment = { ...this.comment, [event.target.name]: event.target.value };
    console.log(this.comment);
  }

  async postComment(id: string) {
    this.comment.id = id;
    console.log(this.comment.id);
    try {
      await fetch(
        "https://desolate-island-05088.herokuapp.com/api/post/comment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.comment),
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      throw error;
    }
  }
  async getCommentList(id: any) {
    try {
      await fetch(
        `https://desolate-island-05088.herokuapp.com/api/post/getcomment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ids: id }),
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.list = data;
          console.log(this.list);
        });
    } catch (error) {
      throw error;
    }
  }
}
export default new CommentStore();
