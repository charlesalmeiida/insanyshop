import { css } from "styled-components";

export const Container = css`
	max-width: 1150px;
	padding: 0 1.5rem;
	margin: 0 auto;

	@media (max-width: 1050px) {
		padding: 0px 2.4rem;
	}
`;

const Heading40 = css`
	font-size: 4rem;
	font-weight: 700;
	line-height: 150%;
`;

const Heading32 = css`
	font-size: 3.2rem;
	font-weight: 300;
	line-height: 150%;
`;

const Heading24 = css`
	font-size: 2.4rem;
	font-weight: 500;
	line-height: 150%;
`;

const Heading20 = css`
	font-size: 2rem;
	font-weight: 500;
	line-height: 150%;
`;

export const Heading = {
	40: Heading40,
	32: Heading32,
	24: Heading24,
	20: Heading20,
};

const Text14Regular = css`
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 150%;
`;

const Text14Bold = css`
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 150%;
`;

const Text16Regular = css`
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 150%;
`;

const Text16Bold = css`
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 150%;
`;

export const Text = {
	Text14Regular: Text14Regular,
	Text14Bold: Text14Bold,
	Text16Regular: Text16Regular,
	Text16Bold: Text16Bold,
};
