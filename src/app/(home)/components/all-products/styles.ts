import { Container, Heading } from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled from "styled-components";

export const Section = styled.section`
	padding: 3.2rem 0 10.4rem;
`;

export const SectionContainer = styled.div`
	${Container}
`;

export const SectionHeading = styled.h1`
	${variables.colors.black};
	${Heading[40]};
`;

export const SectionList = styled.div`
	margin-top: 4.7rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.6rem 3.4rem;
`;
