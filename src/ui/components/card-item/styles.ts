import { flex } from "@/app/styles/mixins";
import { Text } from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled from "styled-components";

export const HolderCard = styled.div`
	border-radius: 1.9rem;
	border: 1px solid #ddd;
	background: #fff;
	box-shadow: -6px 8px 20.4px 0 rgba(0, 0, 0, 0.04);
	width: 100%;
	max-width: 35.6rem;
`;

export const HolderCardImage = styled.div`
	width: 100%;
	max-width: 35.6rem;
	overflow: hidden;
	border-radius: 1.9rem 1.9rem 0 0;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		transition: transform 0.2s ease;
	}

	&:hover {
		img {
			transform: scale(1.05);
		}
	}
`;

export const HolderCardContent = styled.div`
	padding: 1.2rem 2.1rem 2.8rem;
`;

export const HolderCardTop = styled.div`
	${flex("row", "center", "space-between")};
`;

export const HolderCardTopCategory = styled.span`
	${Text.Text14Regular};
`;

export const HolderCardReview = styled.span`
	font-size: 1.4rem;
	${flex("row", "center", "center", "0.5rem")};
	font-weight: 500;
	color: #000;
`;

export const HolderDescription = styled.div`
	margin: 1.5rem 0;
`;

export const ProductTitle = styled.h4`
	${Text.Text14Bold};
	color: #000;
	margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
	${Text.Text14Regular};
	color: #000;
	max-height: 4.2rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const HolderPrice = styled.div`
	${flex("row", "center", "space-between")};
	margin-bottom: 1.5rem;
`;

export const ProductPrice = styled.h3`
	font-size: 2.4rem;
	font-weight: 700;
	line-height: 150%;
	color: ${variables.colors.primary.green};
`;

export const ProductStock = styled.span`
	font-size: 1.4rem;
	line-height: 150%;
`;
