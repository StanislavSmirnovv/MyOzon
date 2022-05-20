import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

const filter = () => {
	const minCost = document.getElementById("min");
	const maxCost = document.getElementById("max");
	const saleCheck = document.getElementById("discount-checkbox");
	const saleCheckSpan = document.querySelector(".filter-check_checkmark");
	minCost.addEventListener("input", () => {
		getData().then((data) => {
			renderGoods(
				priceFilter(
					hotSaleFilter(data, saleCheck.checked),
					minCost.value,
					maxCost.value
				)
			);
		});
	});
	maxCost.addEventListener("input", () => {
		getData().then((data) => {
			renderGoods(
				priceFilter(
					hotSaleFilter(data, saleCheck.checked),
					minCost.value,
					maxCost.value
				)
			);
		});
	});
	saleCheck.addEventListener("change", () => {
		if (saleCheck.checked) {
			saleCheckSpan.classList.add("checked");
		} else {
			saleCheckSpan.classList.remove("checked");
		}
		getData().then((data) => {
			renderGoods(
				priceFilter(
					hotSaleFilter(data, saleCheck.checked),
					minCost.value,
					maxCost.value
				)
			);
		});
	});
};

export default filter;
