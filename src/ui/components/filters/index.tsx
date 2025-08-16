"use client";

import { Category } from "@/types";
import * as S from "./styles";
import React from "react";

interface FilterProps {
	categories: Category[];
}

export function Filters({ categories }: FilterProps) {
	const organizeItems = [
		"Novidades",
		"Preço: Maior - menor",
		"Preço: Menor - maior",
		"Mais vendidos",
	];

	return (
		<S.HolderFilters>
			<S.SelectCategory name="categoria">
				<option value="categoria" disabled>
					Selecione a categoria
				</option>
				{categories.map((category) => (
					<option key={category.id} value={category.id}>
						{category.name}
					</option>
				))}
			</S.SelectCategory>

			<S.SelectCategory name="categoria">
				<option value="categoria" disabled>
					Organizar por
				</option>
				{organizeItems.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</S.SelectCategory>
		</S.HolderFilters>
	);
}
