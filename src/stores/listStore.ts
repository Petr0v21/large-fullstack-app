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
    ownerName: "",
    owner: "",
    links: [],
    url: [],
  };
  ownerPosts: any[] = [];
  currentpage: any = 1;
  filt = {
    location: "",
    category: "",
  };
  constructor() {
    makeAutoObservable(this);
  }

  addField(event: any) {
    this.filt = { ...this.filt, [event.target.name]: event.target.value };
  }

  selectField(name: string, value: string) {
    this.filt = { ...this.filt, [name]: value };
    console.log(this.post);
  }

  cleanPost() {
    this.post = {
      title: "",
      description: "",
      price: "",
      category: "",
      location: "",
      ownerName: "",
      owner: "",
      links: [],
      url: [],
    };
  }

  async getPost(id: string) {
    try {
      await fetch(
        `https://desolate-island-05088.herokuapp.com/api/post/${id}`,
        {
          method: "GET",
        }
      )
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
      await fetch("https://desolate-island-05088.herokuapp.com/api/post/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: this.currentpage,
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

  async getOwnerList(owner: any) {
    try {
      console.log(owner);
      await fetch(
        "https://desolate-island-05088.herokuapp.com/api/post/ownerposts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: owner,
          }),
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.ownerPosts = data;
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
