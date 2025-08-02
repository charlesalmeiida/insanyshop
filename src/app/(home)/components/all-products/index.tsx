"use client";

import React from "react";

import * as S from "./styles";
import { CardItem } from "@/ui/components/card-item";

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
}

export const AllProducts = ({ products }: AllProductsProps) => {
	return (
		<S.Section>
			<S.SectionContainer>
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
