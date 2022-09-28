import { makeAutoObservable } from "mobx";

class ListStore {
  list: any[] = [];
  pages = [];
  currentpage: any = 1;
  filt = {};
  constructor() {
    makeAutoObservable(this);
  }

  addField(event: any) {
    this.filt = { ...this.filt, [event.target.name]: event.target.value };
  }

  async getList(idPosts?: any, cleanFunc?: any) {
    try {
      await fetch("http://localhost:7211/api/post/listselected", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // page: this.currentpage,
          ids: idPosts,
          // filter: this.filt,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.list = data.list;
          // this.pages = data.pages;
        });
      if (idPosts.length !== this.list.length) {
        idPosts.map((arg: any) => {
          if (this.list.find((val) => val === arg)) {
          } else {
            cleanFunc(arg);
          }
        });
      }
    } catch (error) {
      throw error;
    }
  }

  changePage(page: any) {
    this.currentpage = page;
  }
}
export default new ListStore();
