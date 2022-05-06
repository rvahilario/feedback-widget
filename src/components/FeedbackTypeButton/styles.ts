import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.button`
	background-color: #27272a;
	${tw`
		h-28
		w-24
		rounded-b-lg
		flex-col
		items-center
	`}
`;

export const ImageContainer = styled.div`
	${tw`
		bg-red-400
		h-10
		w-10
	`}
`;

export const TitleContainer = styled.div`
	${tw`
		h-6
		w-20
		rounded-b-lg
		bg-red-400
	`}
`;
