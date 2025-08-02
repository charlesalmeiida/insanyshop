"use client";

import React from "react";

import * as S from "./styles";

const Header: React.FC = () => {
	return (
		<S.Header>
			<S.HeaderContainer>
				<S.HeaderLogo href="/">InsanyShop</S.HeaderLogo>
			</S.HeaderContainer>
		</S.Header>
	);
};

export default Header;
