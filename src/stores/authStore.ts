import { makeAutoObservable } from "mobx";

class AuthStore {
  user = {
    email: "",
    password: "",
    phone: "",
    name: "",
  };
  code = "";
  codeHashed = "";
  id = "";
  name = "";
  token = "";
  ok = false;
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
      const data = await fetch("http://localhost:7211/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((info) => info.json())
        .then((info) => {
          if (info.ok) {
            this.ok = true;
            alert(info.message);
          } else {
            alert(info.message);
          }
        });
      console.log(data);
    } catch (e) {
      throw e;
    }
  }

  async logIn() {
    try {
      await fetch("http://localhost:7211/api/auth/login", {
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
          this.name = data.name;
        });
    } catch (e) {
      throw e;
    }
  }

  async checkEmail() {
    try {
      await fetch("http://localhost:7211/api/auth/restorePassword/email", {
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
          if (data.ok) {
            console.log(data);
            this.id = data.id;
            this.codeHashed = data.codeHashed;
          } else {
            alert(data.message);
          }
        });
      console.log(this.id);
    } catch (e) {
      throw e;
    }
  }

  async restorePassword() {
    try {
      const data = await fetch(
        "http://localhost:7211/api/auth/restorePassword/password",
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
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.ok) {
            console.log(data);
            this.ok = true;
            alert(data.message);
          } else {
            alert(data.message);
          }
        });
    } catch (error) {
      throw error;
    }
  }
}
export default new AuthStore();
