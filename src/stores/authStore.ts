import { makeAutoObservable } from "mobx";

class AuthStore {
  user = {
    email: "",
    password: "",
  };
  code = "";
  codeHashed = "";
  id = "";
  token = "";
  constructor() {
    makeAutoObservable(this);
  }

  addField(value: string, name: string) {
    this.user = { ...this.user, [name]: value };
  }

  addCode(value: string) {
    this.code = value;
  }

  async signUp() {
    try {
      console.log(this.user);
      const str = JSON.stringify(this.user);
      console.log(str);
      const data = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      });
      console.log(data);
    } catch (e) {
      throw e;
    }
  }

  async logIn() {
    try {
      await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.token = data.token;
          this.id = data.userId;
        });
    } catch (e) {
      throw e;
    }
  }

  async checkEmail() {
    try {
      await fetch("http://localhost:5000/api/auth/restorePassword/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.id = data.id;
          this.codeHashed = data.codeHashed;
        });
      console.log(this.id);
    } catch (e) {
      throw e;
    }
  }

  async restorePassword() {
    try {
      const data = await fetch(
        "http://localhost:5000/api/auth/restorePassword/password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: this.user.password,
            id: this.id,
            code: this.code,
            codeHashed: this.codeHashed,
          }),
        }
      );
    } catch (error) {
      throw error;
    }
  }
}
export default new AuthStore();
