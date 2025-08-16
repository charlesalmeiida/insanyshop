"use client";

import React from "react";
import * as S from "./styles";

import iconCart from "@/assets/icons/icon-cart.svg";
import Image from "next/image";
import { useCart } from "@/store/add-to-cart";
import { Item } from "@/types";

export const Button = ({ ...products }: Item) => {
	const { addToCart } = useCart();

	const handleClick = () =>
		addToCart({
			...products,
		});

	return (
		<S.Button onClick={handleClick}>
			<Image
				src={iconCart}
				width={24}
				height={24}
				alt="Icone de carrinho"
			/>
			Adicionar
		</S.Button>
	);
};
