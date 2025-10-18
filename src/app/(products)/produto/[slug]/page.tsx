import { Item } from "@/types";
import ProductDetails from "./components/product-details";

export default async function Product({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const data = await fetch(`https://api.insany.co/api/products/${slug}`);
	const result = await data.json();

	const product = result.product as Item;

	if (!product) {
		return <h1>Produto não encontrado</h1>;
	}

	return <ProductDetails {...product} />;
}
