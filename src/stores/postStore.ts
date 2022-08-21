import { makeAutoObservable } from "mobx";

class AuthStore {
  post = {
    title: "The Best Worker",
    description: "It`s honestly",
  };
  file: File | undefined;

  url = {
    images: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  addField(value: string, name: string) {
    this.post = { ...this.post, [name]: value };
  }

  addImage(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
    console.log(this.file);
  }

  async createPost(token: any) {
    try {
      const form = new FormData();
      Object.entries(this.post).map((val) => {
        console.log(val);
        form.append(`${val[0]}`, val[1]);
      });
      if (this.file) {
        form.append("image", this.file);
        await fetch("http://localhost:5000/api/post/create", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: form,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
      }
    } catch (error) {
      throw error;
    }
  }

  async getList() {
    try {
      await fetch("http://localhost:5000/api/post/list", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data[0].images[0]);
          this.url.images = data[1].images;
        });
    } catch (error) {
      throw error;
    }
  }
}
export default new AuthStore();
