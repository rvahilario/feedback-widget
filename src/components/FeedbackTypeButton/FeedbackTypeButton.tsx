import Image from 'next/image';
import { Container, TitleContainer } from './styles';
import { FeedbackTypeButtonProps } from './types';

export const FeedbackTypeButton = ({
	title,
	srcImage,
	altImage,
}: FeedbackTypeButtonProps) => {
	return (
		<Container type="button">
			<Image src={srcImage} alt={altImage} width="40px" height="40px" />
			<TitleContainer>{title}</TitleContainer>
		</Container>
	);
};
