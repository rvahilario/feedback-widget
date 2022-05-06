import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	span {
		${tw`
			text-xl
			leading-6
	 	`}
	}
	a {
		${tw`
			text-xl
			leading-6
			border-2
			border-transparent
			focus:border-brand
			focus:outline-none rounded
	 	`}
	}
`;
