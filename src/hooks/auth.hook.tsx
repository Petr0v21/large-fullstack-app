import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((jwtToken: string, id: string) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
    console.log(localStorage);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(storageName)) {
      const data = JSON.parse(localStorage.getItem(storageName) as string);
      if (data && data.token) {
        login(data.token, data.userId);
      }
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready };
};
