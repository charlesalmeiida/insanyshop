"use client";

import { FilterCategory } from "@/ui/components/filters";
import * as S from "./styles";

interface CategoriesProps {
	categories: FilterCategory[];
}

export default function Categories({ categories }: CategoriesProps) {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.SectionHeading>Principais categorias</S.SectionHeading>

				<S.SectionHolderTabs>
					{categories.map(({ name, productCount, id }) => (
						<S.SectionTab key={id}>
							<S.SectionTabTitle>{name}</S.SectionTabTitle>
							<S.SectionTabText>
								{productCount} produtos
							</S.SectionTabText>
						</S.SectionTab>
					))}
				</S.SectionHolderTabs>
			</S.SectionContainer>
		</S.Section>
	);
}
