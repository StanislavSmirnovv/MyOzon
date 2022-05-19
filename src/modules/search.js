import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
	const SearchInput = document.querySelector(".search-wrapper_input");

	SearchInput.addEventListener("input", (e) => {
		const value = e.target.value;
		getData().then((data) => {
			renderGoods(searchFilter(data, value));
		});
	});
};

export default search;
