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
