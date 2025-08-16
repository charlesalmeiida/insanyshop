"use client";

import React from "react";

import * as S from "./styles";
import { CardItem } from "@/ui/components/card-item";
import { Filters } from "@/ui/components/filters";
import { Item } from "@/types";
import { Category } from "@/types";

interface AllProductsProps {
	products: Item[];
	categories: Category[];
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
