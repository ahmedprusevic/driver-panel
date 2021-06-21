import React from "react";
import { useAuth } from "../context/auth.context";

export const withAuth = (Component: React.FC) => {
	const Auth = () => {
		const { currentUser } = useAuth();
	};
};
