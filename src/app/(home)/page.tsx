import { NextPage } from "next";
import { AllProducts } from "./components/all-products";

const Home: NextPage = async () => {
	const data = await fetch("https://api.insany.co/api/products");
	const result = await data.json();

	return (
		<main>
			<AllProducts products={result.products} />
		</main>
	);
};

export default Home;
