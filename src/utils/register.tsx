export const register = async(login: string, password: string, repeatedPassword: string) => {
	console.log(login + password + repeatedPassword)
	return {
		id: 4,
		username: "Bob",
		email: "bob@bobmail.com"
	};	
};