import { flex } from "@/app/styles/mixins";
import variables from "@/app/styles/variables";
import styled from "styled-components";

export const Button = styled.button`
	background: ${variables.colors.black};
	${flex("row", "center", "center", "1.6rem")};
	padding: 0.8rem 0;
	color: ${variables.colors.white};
	border-radius: 0.4rem;
	width: 100%;
	text-align: center;
	cursor: pointer;
	transition: filter 0.2s ease;
	font-size: 1.6rem;
	line-height: 150%;
	font-weight: 500;

	&:hover {
		filter: brightness(0.8);
	}
`;
