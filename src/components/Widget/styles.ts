import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
		absolute
		bottom-5
		right-5
	`}
`;

export const FeedbackButton = styled.button`
	${tw`
		bg-primary-500
		text-white
		h-12
		px-3
		rounded-full
		flex
		items-center
	`}

	span {
		${tw`
			overflow-hidden
			max-w-0
			transition-all
			duration-500
		`}

		span {
			${tw`
				pl-2
			`}
		}
	}
`;
