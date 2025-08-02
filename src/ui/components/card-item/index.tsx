"use client";

import React from "react";

import iconStar from "@/assets/icons/icon-star.svg";

import * as S from "./styles";
import Image from "next/image";
import { Button } from "../button";

interface CardItemProps {
	price: number;
	category: string;
	rating: number;
	stock: number;
	id: number;
	name: string;
	description: string;
	image: string;
}

export function CardItem({
	price,
	category,
	rating,
	stock,
	name,
	description,
	image,
}: CardItemProps) {
	return (
		<S.HolderCard>
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

				<Button />
			</S.HolderCardContent>
		</S.HolderCard>
	);
}
