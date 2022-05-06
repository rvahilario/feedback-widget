import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
		bg-surface-primary
		p-4
		relative
		rounded-2xl
		mb-4
		flex-col
		items-center
		shadow-lg
		md:w-auto
		`}
`;

export const FormButtons = styled.div`
	${tw`
		py-8
		gap-2
		w-full
		flex
	`}
`;
