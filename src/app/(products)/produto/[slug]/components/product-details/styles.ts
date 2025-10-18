import { flex, frame } from "@/app/styles/mixins";
import { Container } from "@/app/styles/patterns";
import styled from "styled-components";

export const Section = styled.section`
	padding: 2.5rem 0 8.9rem;
`;

export const SectionContainer = styled.div`
	${Container};
`;

export const SectionProduct = styled.div`
	margin-top: 2.4rem;
	${flex("row", "flex-start", "space-between")};
`;

export const SectionImage = styled.picture`
	${frame};

	img {
		min-height: 58rem;
	}
`;

export const SectionContent = styled.div`
	max-width: 44.8rem;
	min-height: 58rem;
	position: relative;

	button {
		position: absolute;
		bottom: 0;
	}
`;

export const SectionTag = styled.span`
	color: #41414d;
	font-size: 1.6rem;
	line-height: 150%;
`;

export const SectionTitle = styled.h1`
	color: #41414d;
	font-size: 3.2rem;
	font-weight: 300;
	line-height: 150%;
	margin: 1.2rem 0 0.4rem;
`;

export const SectionPrice = styled.p`
	color: #46ab6a;
	font-size: 2rem;
	font-weight: 600;
	line-height: 150%;
`;

export const SectionHolderDescription = styled.div`
	margin-top: 10rem;
`;

export const SectionTitleDescription = styled.strong`
	color: #737380;
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 150%;
	text-transform: uppercase;
`;

export const SectionDescription = styled.p`
	color: #41414d;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 150%;
	margin-top: 0.8rem;
`;
