import { makeAutoObservable } from "mobx";

class AuthStore {
  post = {
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
  };
  updatedPost = {
    title: "The Best Worker",
    description: "It`s honestly",
  };
  files: any[] = [];

  url = {
    images: [],
  };

  id = "";

  constructor() {
    makeAutoObservable(this);
  }

  addField(event: any) {
    this.post = { ...this.post, [event.target.name]: event.target.value };
  }

  addImage(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }
    console.log(this.files);
  }

  cleanSelectedImage(indexDel: number) {
    this.files = this.files.filter((file, index) => index !== indexDel);
  }

  async createPost(token: any) {
    try {
      const form = new FormData();
      Object.entries(this.post).map((val) => {
        console.log(val);
        form.append(`${val[0]}`, val[1]);
      });
      for (let i = 0; i < this.files.length; i++) {
        form.append("image", this.files[i]);
      }
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
          console.log(data);
          this.url.images = data[0].url;
          this.id = data[0]._id;
        });
    } catch (error) {
      throw error;
    }
  }

  async deletePost(token: any) {
    try {
      await fetch("http://localhost:5000/api/post/delete", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: this.id }),
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

  // async updatePost(token: any) {
  //   try {
  //     const form = new FormData();
  //     form.append("id", this.id);
  //     form.append(
  //       "images",
  //       "785609a81acd38ad7688d826d8e56331ab1ebc1676ad7de3f4489d626a11bbb8"
  //     );
  //     Object.entries(this.updatedPost).map((val) => {
  //       console.log(val);
  //       form.append(`${val[0]}`, val[1]);
  //     });
  //     for (let i = 0; i < this.files.length; i++) {
  //       form.append("image", this.files[i]);
  //     }
  //     await fetch("http://localhost:5000/api/post/update", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: form,
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
export default new AuthStore();
