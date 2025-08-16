import { NextPage } from "next";
import { AllProducts } from "./components/all-products";
import Categories from "./components/categories";
import Pagination from "./components/pagination";

const Home: NextPage = async () => {
	const data = await fetch("https://api.insany.co/api/products");
	const result = await data.json();

	const dataCategory = await fetch("https://api.insany.co/api/categories");
	const resultCategory = await dataCategory.json();

	return (
		<main>
			<AllProducts
				products={result.products}
				categories={resultCategory.categories}
			/>

			<Pagination />

			<Categories categories={resultCategory.categories} />
		</main>
	);
};

export default Home;
