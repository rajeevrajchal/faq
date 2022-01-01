import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const authContext = createContext({} as any);

const { Provider } = authContext;

const useAuthProvider = () => {
	const navigate = useNavigate();
	const [loggedUser, setLoggedUser] = useState<any>(null);
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const localStorage = window.localStorage;

	const signIn = ({ email, password }: { email: string; password: string }) => {
		localStorage.setItem("loggedUser", JSON.stringify(password));
		setLoggedUser({
			email: email,
		});
		setIsUserLoggedIn(true);
		toast.success("You are logged in!");
		return "";
	};

	const signOut = () => {
		console.log("loggin out user");
		localStorage.removeItem("loggedUser");
		setLoggedUser(null);
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
		console.log("this is loading");
		const userFromLocalStorage = localStorage.getItem("loggedUser");
		if (userFromLocalStorage) {
			setLoggedUser(userFromLocalStorage);
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
		signIn,
		signOut,
	};
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const authData = useAuthProvider();
	return <Provider value={authData}>{children}</Provider>;
};

export const useAuth = () => useContext(authContext);
