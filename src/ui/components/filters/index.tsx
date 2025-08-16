"use client";

import { Category } from "@/types";
import * as S from "./styles";
import React from "react";

interface FilterProps {
	categories: Category[];
}

export function Filters({ categories }: FilterProps) {
	const [filter, setFilter] = React.useState("");

	const handleChangeFilter = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setFilter(event.target.value);

		console.log(filter);
	};

	return (
		<S.HolderFilters>
			<S.SelectCategory name="categoria" onChange={handleChangeFilter}>
				<option value="categoria" disabled>
					Selecione a categoria
				</option>
				{categories.map((category) => (
					<option key={category.id} value={category.id}>
						{category.name}
					</option>
				))}
			</S.SelectCategory>
		</S.HolderFilters>
	);
}
