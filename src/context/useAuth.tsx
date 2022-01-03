import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { callAxios } from "../plugins/call.axios";
const authContext = createContext({} as any);

const { Provider } = authContext;

const useAuthProvider = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const localStorage = window.localStorage;

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const user = await callAxios({
      url: "login",
      method: "POST",
      data: {
        email,
        password,
      },
    });
    if (user.status !== "success") {
      toast.success("Login Failed");
      setLoggedUser(null);
      setAccessToken("");
      setIsUserLoggedIn(false);
    }
    setLoggedUser(user.user);
    setAccessToken(user.token);
    setIsUserLoggedIn(true);
    localStorage.setItem("FAQ-LOGGED-IN-USER", JSON.stringify(user.user));
    localStorage.setItem("FAQ-ACCESS-TOKEN", JSON.stringify(user.token));
     setLoading(false);
    toast.success("Login Successful");
  };

  const signOut = () => {
    localStorage.removeItem("FAQ-LOGGED-IN-USER");
    localStorage.removeItem("FAQ-ACCESS-TOKEN");
    setLoggedUser(null);
    setAccessToken("");
    setIsUserLoggedIn(false);
    navigate("/");
  };

  /**
   * On process of checkAuthentication, the route might changed to the login since
   * this process take some milliseconds for login to updat eht isUserLoggedIn flag
   * If you don't want to move to '/login' you can simply move on route checking and
   * make some login
   */
  const checkAuthentication = () => {
    setLoading(true);
    const userFromLocalStorage = localStorage.getItem("FAQ-LOGGED-IN-USER");
    const accessToeken = localStorage.getItem("FAQ-ACCESS-TOKEN");

    if (userFromLocalStorage && accessToeken) {
      setLoggedUser(JSON.parse(userFromLocalStorage));
      setAccessToken(JSON.parse(accessToeken));
      setIsUserLoggedIn(true);
    } else {
      setLoggedUser(null);
      setIsUserLoggedIn(false);
    }
    setLoading(false);
  };

  // rechecking user date exist or not.
  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isUserLoggedIn,
    loading,
    loggedUser,
    accessToken,
    signIn,
    signOut,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authData = useAuthProvider();
  return <Provider value={authData}>{children}</Provider>;
};

export const useAuth = () => useContext(authContext);
