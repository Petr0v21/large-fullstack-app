import { makeAutoObservable } from "mobx";

class UserStore {
  user = {
    email: "",
    phone: "",
    name: "",
    age: "",
    addInf: "",
    url: "",
  };
  userPhoto: any;
  posts: any[] = [];
  updatedPost = {
    title: "The Best Worker",
    description: "It`s honestly",
  };
  images: any[] = [];
  files: any[] = [];
  id = "";

  constructor() {
    makeAutoObservable(this);
  }

  copyPost(post: any, indexPost: number) {
    console.log(this.posts[indexPost]);
    const { url, images, __v, _id, links, ...body } = post;
    console.log(body);
    this.updatedPost = body;
    console.log(this.updatedPost);
  }

  addFieldUser(event: any) {
    this.user = {
      ...this.user,
      [event.target.name]: event.target.value,
    };
    console.log(this.user);
  }

  addField(event: any) {
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

  addPhotoUser(event: any) {
    this.userPhoto = event.target.files[0];
    console.log(this.userPhoto);
  }

  setDeltedId(id: string) {
    this.id = id;
    console.log(this.id);
  }

  addDeleteImage(idImg: any, indexPost: number) {
    console.log(idImg, indexPost);
    const indexImg = this.posts[indexPost].images.findIndex(
      (id: any) => id === idImg
    );
    this.posts[indexPost].images = this.posts[indexPost].images.filter(
      (link: any, index: any) => link !== idImg
    );
    this.posts[indexPost].url = this.posts[indexPost].url.filter(
      (link: any, index: any) => index !== indexImg
    );
    this.images.push(idImg);
  }

  cleanSelectedImage(indexDel: number) {
    this.files = this.files.filter((file, index) => index !== indexDel);
  }

  //   async createPost(token: any) {
  //     try {
  //       const form = new FormData();
  //       Object.entries(this.post).map((val) => {
  //         console.log(val);
  //         form.append(`${val[0]}`, val[1]);
  //       });
  //       for (let i = 0; i < this.files.length; i++) {
  //         form.append("image", this.files[i]);
  //       }
  //       await fetch("http://localhost:7211/api/post/create", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: form,
  //       })
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           console.log(data);
  //         });
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  async updateUser(token: any) {
    try {
      const form = new FormData();
      console.log("UPDATE POST <ID>", this.id);
      Object.entries(this.user).map((val) => {
        console.log(val);
        form.append(`${val[0]}`, val[1]);
      });
      form.append("image", this.userPhoto);
      const data = await fetch("http://localhost:7211/api/user/updateUser", {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: form,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    } catch (e) {
      throw e;
    }
  }

  async getUser(token: any) {
    try {
      await fetch("http://localhost:7211/api/user/info", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (const [key, value] of Object.entries(data)) {
            this.user = { ...this.user, [key]: value };
          }
        });
    } catch (error) {
      throw error;
    }
  }

  async getList(token: any) {
    try {
      await fetch("http://localhost:7211/api/user/posts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.posts = data;
        });
    } catch (error) {
      throw error;
    }
  }

  async deletePost(token: any, id: string) {
    try {
      await fetch("http://localhost:7211/api/post/delete", {
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
        });
      alert("Post has been deleted!");
    } catch (error) {
      throw error;
    }
  }

  async updatePost(token: any) {
    try {
      const form = new FormData();
      console.log("UPDATE POST <ID>", this.id);
      form.append("id", this.id);
      Object.entries(this.updatedPost).map((val) => {
        console.log(val);
        form.append(`${val[0]}`, val[1]);
      });
      for (let i = 0; i < this.files.length; i++) {
        form.append("image", this.files[i]);
      }
      for (let i = 0; i < this.images.length; i++) {
        form.append("images", this.images[i]);
      }
      await fetch("http://localhost:7211/api/post/update", {
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
          alert(data.message);
        });
    } catch (error) {
      throw error;
    }
  }
}
export default new UserStore();
