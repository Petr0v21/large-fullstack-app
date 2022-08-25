import { makeAutoObservable } from "mobx";

class updatePostStore {
  updatedPost = {
    title: "The Best Worker",
    description: "It`s honestly",
    images: [""],
    url: [
      "https://planetcode.in/assets/images/default-image-png-9-300x200.png",
    ],
  };
  images: any[] = [];
  files: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addField(event: any) {
    console.log([event.target.name], event.target.value);
    this.updatedPost = {
      ...this.updatedPost,
      [event.target.name]: event.target.value,
    };
  }

  addImage(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }
    console.log(this.files);
  }

  addDeleteImage(idImg: any) {
    console.log(idImg);
    const indexImg = this.updatedPost.images.findIndex((id) => id === idImg);
    this.updatedPost.images = this.updatedPost.images.filter(
      (link) => link !== idImg
    );
    console.log(this.updatedPost.images);
    this.updatedPost.url = this.updatedPost.url.filter(
      (link, index) => index !== indexImg
    );
    console.log(this.updatedPost.url);
    this.images.push(idImg);
  }

  cleanSelectedImage(indexDel: number) {
    this.files = this.files.filter((file, index) => index !== indexDel);
  }

  async getPost(token: any, id: string) {
    try {
      await fetch("http://localhost:5000/api/user/onePost", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          this.updatedPost = data;
        });
    } catch (error) {
      throw error;
    }
  }

  async updatePost(token: any, id: string) {
    try {
      const form = new FormData();
      form.append("id", id);
      Object.entries(this.updatedPost).map((val) => {
        console.log(val);
        if (!Array.isArray(val[1])) {
          console.log(val);
          form.append(`${val[0]}`, val[1]);
        }
      });
      for (let i = 0; i < this.files.length; i++) {
        form.append("image", this.files[i]);
      }
      for (let i = 0; i < this.images.length; i++) {
        form.append("images", this.images[i]);
      }
      await fetch("http://localhost:5000/api/post/update", {
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
    } catch (error) {
      throw error;
    }
  }
}
export default new updatePostStore();
