"use client";

import React from "react";

import * as S from "./styles";

const Pagination = () => {
	const pages = [1, 2, 3, 4, 5];

	return (
		<S.Pagination>
			<S.PaginationContainer>
				<S.PaginationBulletNav>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M14 16L10 12L14 8"
							stroke="#737380"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</S.PaginationBulletNav>

				{pages.map((page) => (
					<S.PaginationBullet key={page}>{page}</S.PaginationBullet>
				))}

				<S.PaginationBulletNav>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M10 16L14 12L10 8"
							stroke="#737380"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</S.PaginationBulletNav>
			</S.PaginationContainer>
		</S.Pagination>
	);
};

export default Pagination;
