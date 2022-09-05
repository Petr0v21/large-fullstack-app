import { makeAutoObservable } from "mobx";

class ListStore {
  list: any[] = [];
  pages = [];
  post = {
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    url: [],
  };
  currentpage: any = 1;
  filt = {};
  constructor() {
    makeAutoObservable(this);
  }

  addField(event: any) {
    this.filt = { ...this.filt, [event.target.name]: event.target.value };
  }

  async getPost(id: string) {
    try {
      await fetch(`http://localhost:5000/api/post/${id}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.post = data;
        });
    } catch (error) {
      throw error;
    }
  }

  async getList() {
    try {
      await fetch("http://localhost:5000/api/post/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: this.currentpage,
          filter: this.filt,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.list = data.list;
          this.pages = data.pages;
        });
    } catch (error) {
      throw error;
    }
  }

  changePage(page: any) {
    this.currentpage = page;
    this.getList();
  }
}
export default new ListStore();
