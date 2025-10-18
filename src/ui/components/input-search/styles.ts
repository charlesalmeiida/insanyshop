import { center } from "@/app/styles/mixins";
import styled from "styled-components";

export const HeaderSearch = styled.div`
	padding: 0.9rem 1.6rem 0.9rem 1.2rem;
	border-radius: 0.8rem;
	background: #f3f7ff;
	${center};
	width: 100%;
	gap: 8.6rem;
	max-width: 35.2rem;

	svg {
		flex-shrink: 0;
	}
`;

export const HeaderSearchInput = styled.input`
	width: 100%;
	background: transparent;

	&::placeholder {
		font-size: 1.4rem;
		color: #737380;
		line-height: 22px;
	}
`;

export const HeaderSearchButton = styled.button``;
