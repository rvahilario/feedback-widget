import { Container, ImageContainer, TitleContainer } from './styles';
import { FeedbackTypeButtonProps } from './types';

export const FeedbackTypeButton = ({
	title,
	image,
}: FeedbackTypeButtonProps) => {
	return (
		<Container>
			<ImageContainer>{image}</ImageContainer>
			<TitleContainer>{title}</TitleContainer>
		</Container>
	);
};
