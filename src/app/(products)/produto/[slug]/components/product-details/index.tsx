"use client";

import React from "react";

import * as S from "./styles";

import Image from "next/image";
import { Button } from "@/ui/components/button";
import { Item } from "@/types";
import { BackButton } from "@/ui/components/back-button";

const ProductDetails = ({
	image,
	name,
	description,
	price,
	category,
	rating,
	stock,
	id,
}: Item) => {
	const products = {
		image,
		name,
		description,
		price,
		category,
		rating,
		stock,
		id,
	};

	return (
		<S.Section>
			<S.SectionContainer>
				<BackButton />

				<S.SectionProduct>
					<S.SectionImage>
						<Image
							src={image}
							width={640}
							height={580}
							alt="Imagem do produto"
						/>
					</S.SectionImage>

					<S.SectionContent>
						<S.SectionTag>{category}</S.SectionTag>

						<S.SectionTitle>{name}</S.SectionTitle>

						<S.SectionPrice>{price}</S.SectionPrice>

						<S.SectionHolderDescription>
							<S.SectionTitleDescription>
								Descrição
							</S.SectionTitleDescription>

							<S.SectionDescription>
								{description}
							</S.SectionDescription>
						</S.SectionHolderDescription>

						<Button {...products} />
					</S.SectionContent>
				</S.SectionProduct>
			</S.SectionContainer>
		</S.Section>
	);
};

export default ProductDetails;
