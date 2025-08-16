"use client";

import React from "react";

import iconStar from "@/assets/icons/icon-star.svg";

import * as S from "./styles";
import Image from "next/image";
import { Button } from "../button";
import { Item } from "@/types";

export function CardItem({
	price,
	category,
	rating,
	stock,
	name,
	description,
	image,
	id,
}: Item) {
	const products = {
		price,
		category,
		rating,
		stock,
		name,
		description,
		image,
		id,
	};

	return (
		<S.HolderCard href={`/produto/${id}`}>
			<S.HolderCardImage>
				<Image
					src={image}
					width={356}
					height={270}
					alt="Imagem do produto"
				/>
			</S.HolderCardImage>

			<S.HolderCardContent>
				<S.HolderCardTop>
					<S.HolderCardTopCategory>
						{category}
					</S.HolderCardTopCategory>

					<S.HolderCardReview>
						<Image
							src={iconStar}
							width={14}
							height={12}
							alt="Ícone de estrela"
						/>
						{rating}
					</S.HolderCardReview>
				</S.HolderCardTop>

				<S.HolderDescription>
					<S.ProductTitle>{name}</S.ProductTitle>

					<S.ProductDescription>{description}</S.ProductDescription>
				</S.HolderDescription>

				<S.HolderPrice>
					<S.ProductPrice>R$ {price}</S.ProductPrice>

					<S.ProductStock>{stock} em estoque</S.ProductStock>
				</S.HolderPrice>

				<Button {...products} />
			</S.HolderCardContent>
		</S.HolderCard>
	);
}
