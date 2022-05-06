import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.button`
	background-color: #27272a;
	${tw`
		w-24
		py-5
		rounded-lg
		flex-1
		flex
		flex-col
		items-center
		gap-2
		border-2
		border-transparent
		hover:border-brand
		focus:border-brand
		focus:outline-none
	`}
`;

export const TitleContainer = styled.div`
	${tw`
	`}
`;
