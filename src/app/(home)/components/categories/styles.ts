import { flex } from "@/app/styles/mixins";
import { Container } from "@/app/styles/patterns";
import styled from "styled-components";

export const Section = styled.section`
	padding: 10.8rem 0 16.8rem;
`;

export const SectionContainer = styled.div`
	${Container};
`;

export const SectionHeading = styled.h2`
	font-size: 4rem;
	font-weight: 700;
	line-height: 150%;
`;

export const SectionHolderTabs = styled.div`
	margin-top: 3.4rem;
	${flex("row", "center", "space-between")};
`;

export const SectionTab = styled.div`
	padding-top: 2.6rem;
	border-radius: 12px;
	border: 1px solid #e0e0e0;
	background: #fff;
	cursor: pointer;
	width: 100%;
	max-width: 20.8rem;
	height: 11.6rem;
	transition: all 0.3s ease-in-out;

	&:hover {
		border: 1px solid #000;
	}
`;

export const SectionTabTitle = styled.h3`
	color: #000;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 150%;
	text-align: center;
	margin-bottom: 1.6rem;
`;

export const SectionTabText = styled.p`
	color: #000;
	font-size: 16px;
	line-height: 150%;
	text-align: center;
`;
