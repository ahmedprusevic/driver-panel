import React from "react";
import { useState } from "react";

const AuthContext = React.createContext<UserContext>({
	currentUser: null,
	setCurrentUser: null,
});

export const AuthProvider = ({ user, children }: AuthProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(user);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
