import { makeAutoObservable } from "mobx";

class CommentStore {
  comment = {
    id: "",
    rating: 0,
    email: "",
    name: "",
    text: "",
  };
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
      await fetch("http://localhost:5000/api/post/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.comment),
      })
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
}
export default new CommentStore();
