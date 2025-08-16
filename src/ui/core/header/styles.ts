import { Container, Heading } from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled from "styled-components";

export const Header = styled.header`
	background: ${variables.colors.white};
	padding: 0.9rem 0;
`;

export const HeaderContainer = styled.div`
	${Container}
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderLogo = styled.a`
	${Heading[40]}
	color: #5D5D6D;
`;

export const HeaderNav = styled.div`
	display: flex;
	align-items: center;
	gap: 2.4rem;
`;
