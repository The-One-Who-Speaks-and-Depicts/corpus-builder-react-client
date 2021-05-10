export const register = async(login: string, password: string, repeatedPassword: string) => {
	const res : boolean = await fetch("http://localhost:5000/api/v1/User/?" + new URLSearchParams({login: login, password: password, repeatedPassword: repeatedPassword}), {method: 'POST'})
		.then(response => response.text())
		.then(response => {
			if (response === "true") {
				return true;
			}
			return false;
		})
		.then(response => {
			return false;
		});
	return res;		
};