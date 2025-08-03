"use client";

import React from "react";

import * as S from "./styles";
import { CardItem } from "@/ui/components/card-item";
import { FilterCategory, Filters } from "@/ui/components/filters";

export type CardItemProps = {
	id: number;
	name: string;
	description: string;
	image: string;
	category: string;
	stock: number;
	rating: number;
	price: number;
};

interface AllProductsProps {
	products: CardItemProps[];
	categories: FilterCategory[];
}

export const AllProducts = ({ products, categories }: AllProductsProps) => {
	return (
		<S.Section>
			<S.SectionContainer>
				<Filters categories={categories} />

				<S.SectionHeading>Todos os produtos</S.SectionHeading>

				<S.SectionList>
					{products.slice(0, 6).map((product) => (
						<CardItem {...product} key={product.id} />
					))}
				</S.SectionList>
			</S.SectionContainer>
		</S.Section>
	);
};
