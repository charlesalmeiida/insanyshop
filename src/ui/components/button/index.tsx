"use client";

import React from "react";
import * as S from "./styles";

import iconCart from "@/assets/icons/icon-cart.svg";
import Image from "next/image";

export const Button: React.FC = () => {
	return (
		<S.Button>
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
