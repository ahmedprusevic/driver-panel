interface User {
	token: string;
	name: string;
	id: number;
}

type AuthProviderProps = {
	user: User | null;
	children: React.ReactNode;
};

type UserContext = {
	currentUser: User | null;
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null>> | null;
};
