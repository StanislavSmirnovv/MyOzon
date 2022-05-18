const getData = () => {
	return fetch(
		"https://myozon-34a58-default-rtdb.firebaseio.com/goods.json"
	).then((response) => {
		return response.json();
	});
};

export default getData;
