import { center } from "@/app/styles/mixins";
import styled from "styled-components";

export const CartButton = styled.button`
	cursor: pointer;
	position: relative;

	span {
		background: #de3838;
		${center};
		position: absolute;
		bottom: -0.4rem;
		right: -0.8rem;
		width: 1.7rem;
		height: 1.7rem;
		color: #fff;
		text-align: center;
		border-radius: 50%;
		font-size: 1rem;

		font-weight: 500;
		line-height: 26px;
	}
`;
