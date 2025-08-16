import { flex } from "@/app/styles/mixins";
import styled from "styled-components";

export const HolderFilters = styled.div`
	${flex("row", "center", "space-between")};
	margin-bottom: 4.8rem;
`;

export const SelectCategory = styled.select`
	background: transparent;
	cursor: pointer;

	&:focus {
		outline: none;
	}

	font-size: 1.4rem;
	color: #737380;
	line-height: 22px;
`;

export const SelectType = styled.select``;
