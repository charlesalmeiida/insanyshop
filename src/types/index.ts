export type Category = {
	id: string;
	name: string;
	description: string;
	icon: string;
	productCount: number;
};

export type Item = {
	price: number;
	category: string;
	rating: number;
	stock: number;
	id: number;
	name: string;
	description: string;
	image: string;
};
