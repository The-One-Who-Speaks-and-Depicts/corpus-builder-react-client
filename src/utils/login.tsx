export const login = async(login: string, password: string) => {
	const res : object | null = await fetch("http://localhost:5000/api/v1/User/?" + new URLSearchParams({login: login, password: password}), {method: 'GET'})
		.then(response => response.text())
		.then(response => {
			if (response === "true") {
				return  {
					id: login
				};
			}
			return null;
		});
	return res;	
};