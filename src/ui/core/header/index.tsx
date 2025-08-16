"use client";

import React from "react";

import * as S from "./styles";
import InputSearch from "@/ui/components/input-search";
import Cart from "@/ui/components/cart";

const Header: React.FC = () => {
	return (
		<S.Header>
			<S.HeaderContainer>
				<S.HeaderLogo href={"/"}>InsanyShop</S.HeaderLogo>

				<S.HeaderNav>
					<InputSearch />

					<Cart />
				</S.HeaderNav>
			</S.HeaderContainer>
		</S.Header>
	);
};

export default Header;
