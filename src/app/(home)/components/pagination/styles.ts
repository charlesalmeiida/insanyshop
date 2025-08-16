import { center } from "@/app/styles/mixins";
import { Container } from "@/app/styles/patterns";
import styled from "styled-components";

export const Pagination = styled.div``;

export const PaginationContainer = styled.div`
	${Container};
	${center};
	gap: 2.1rem;
`;

export const PaginationBullet = styled.button`
	border-radius: 0.8rem;
	background: #e9e9f0;
	padding: 0.4rem;
	width: 3.2rem;
	height: 3.2rem;
	${center};

	color: #737380;
	font-size: 1.6rem;
	line-height: 150%;

	transition: all 0.3s ease;

	&:hover {
		border: 1px solid #a212df;
		background: #f5f5fa;
		color: #a212df;
		font-size: 600;
	}
`;

export const PaginationBulletNav = styled(PaginationBullet)``;
