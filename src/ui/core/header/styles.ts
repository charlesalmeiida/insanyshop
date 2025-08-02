import { Container, Heading } from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled from "styled-components";

export const Header = styled.header`
	background: ${variables.colors.white};
`;

export const HeaderContainer = styled.div`
	${Container}
`;

export const HeaderLogo = styled.a`
	${Heading[40]}
	color: #5D5D6D;
`;
