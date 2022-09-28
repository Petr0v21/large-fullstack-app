import { makeAutoObservable } from "mobx";

class AuthStore {
  post = {
    title: "",
    description: "",
    priceAmount: "",
    priceValue: "",
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
    console.log(this.post);
  }

  selectField(name: string, value: string) {
    this.post = { ...this.post, [name]: value };
    console.log(this.post);
  }

  addImage(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      if (this.files.length > 5) {
        alert("Це більше за максимальну кількість фото, маскимум(6)");
        return;
      }
      this.files.push(event.target.files[i]);
    }
  }

  cleanSelectedImage(indexDel: number) {
    this.files = this.files.filter((file, index) => index !== indexDel);
  }

  cleanStore() {
    this.post = {
      title: "",
      description: "",
      priceAmount: "",
      priceValue: "",
      category: "",
      location: "",
    };
    this.files = [];
    this.url.images = [];
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
      await fetch("http://localhost:7211/api/post/create", {
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

  async getList() {
    try {
      await fetch("http://localhost:7211/api/post/list", {
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
      await fetch("http://localhost:7211/api/post/delete", {
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
          alert(data.message);
        });
    } catch (error) {
      throw error;
    }
  }
}
export default new AuthStore();
