function useToken() {
	var abc = "12345677890abcdefghijklmnopqrstuvwxyz";
	var secretCode = "";
	while (secretCode.length < 25) {
		secretCode += abc[Math.floor(Math.random() * abc.length)];
	}
	return localStorage.setItem('our-team', secretCode);
}

export default useToken
