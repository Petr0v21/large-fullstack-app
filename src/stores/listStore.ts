import { runInAction, makeAutoObservable } from "mobx";
import { LoadingState } from "mobx-loading-state";

class ListStore {
  loading = new LoadingState();
  list: any[] = [];
  pages = [];
  post = {
    title: "",
    description: "",
    price: {
      amount: 0,
      value: "",
    },
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
    title: "",
    location: "",
    category: "",
    price: "",
    order: "",
  };
  listTitle: any[] = [];
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
      price: {
        amount: 0,
        value: "",
      },
      category: "",
      location: "",
      ownerName: "",
      owner: "",
      links: [],
      url: [],
    };
  }

  async getTitles() {
    try {
      console.log("get");
      if (this.filt.title.length >= 3) {
        await fetch(
          `https://desolate-island-05088.herokuapp.com/api/post/search/${this.filt.title}`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.listTitle = data;
          });
      } else {
        this.listTitle = [];
      }
    } catch (error) {
      throw error;
    }
  }

  async getPost(id: string) {
    try {
      this.loading.on();
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
          console.log(this.post);
        });
      this.loading.off();
    } catch (error) {
      throw error;
    }
  }

  async getList() {
    try {
      let actualfilt = {};
      Object.entries(this.filt).map((val) => {
        if (val[1] !== "") actualfilt = { ...actualfilt, [val[0]]: val[1] };
      });
      console.log(actualfilt);
      if (Object.values(this.filt).find((val) => val !== "")) {
        this.loading.on();
        await fetch(
          "https://desolate-island-05088.herokuapp.com/api/post/list",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              page: this.currentpage,
              filter: actualfilt,
            }),
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.list = data.list;
            this.pages = data.pages;
          });
        this.loading.off();
      } else {
        this.loading.on();
        await fetch(
          "https://desolate-island-05088.herokuapp.com/api/post/list",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              page: this.currentpage,
            }),
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.list = data.list;
            this.pages = data.pages;
          });
        this.loading.off();
      }
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
