import { createContext } from "react";

function noop() {}

interface AppContextInterface {
  token: string | null;
  userName: string | null;
  login: Function;
  logout: Function;
  isAuthenticated: boolean;
}

//   const AppCtx = createContext<AppContextInterface | null>(null);

const AuthContext = createContext<AppContextInterface | null>({
  token: null,
  userName: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
});

export default AuthContext;
