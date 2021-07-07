interface User {
  Role: string;
  Name: string;
  ID: number;
  Email: string;
}

type AuthProviderProps = {
  user: User | null;
  children: React.ReactNode;
};

type UserContext = {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};
