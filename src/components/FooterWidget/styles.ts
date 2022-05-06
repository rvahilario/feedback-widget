import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.footer`
	${tw`
		h-4
		text-secondary
		text-xs
	`}

	a {
		${tw`
			underline
			text-secondary
			border-2
			border-transparent
			focus:border-brand
			focus:outline-none rounded
		`}
	}
`;
