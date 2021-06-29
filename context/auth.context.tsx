import React from "react";
import { useState, useEffect } from "react";

const AuthContext = React.createContext<UserContext>({
	currentUser: null,
	setCurrentUser: () => {},
});

export const AuthProvider = ({ user, children }: AuthProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(user);

	useEffect(() => {
		const sessionUser = sessionStorage.getItem("user");
		if (sessionUser) {
			setCurrentUser(JSON.parse(sessionUser));
		}
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
