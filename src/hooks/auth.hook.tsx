import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  const login = useCallback((jwtToken: string, name: string) => {
    setToken(jwtToken);
    setUserName(name);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        name: name,
        token: jwtToken,
      })
    );
    console.log(localStorage);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserName(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(storageName)) {
      const data = JSON.parse(localStorage.getItem(storageName) as string);
      if (data && data.token) {
        login(data.token, data.name);
      }
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userName, ready };
};
