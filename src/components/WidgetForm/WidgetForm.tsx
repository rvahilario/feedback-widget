import { feedbackTypes } from '@/utils/utils';
import { FeedbackTypeButton } from '../FeedbackTypeButton';
import { FooterWidget } from '../FooterWidget';
import { HeaderWidget } from '../HeaderWidget';
import { Container, FormButtons } from './styles';
import { WidgetFormProps } from './types';

export const WidgetForm = ({}: WidgetFormProps) => {
	return (
		<Container className="w-[calc(100vw-2rem)]">
			<HeaderWidget title="Send your feedback" />

			<FormButtons>
				{Object.entries(feedbackTypes).map(([key, value]) => (
					<FeedbackTypeButton
						key={key}
						title={value.title}
						srcImage={value.image.source}
						altImage={value.image.alt}
					/>
				))}
			</FormButtons>

			<FooterWidget />
		</Container>
	);
};
