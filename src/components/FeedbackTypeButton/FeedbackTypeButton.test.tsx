import { render, screen } from '@/test-utils';
import { FeedbackTypeButton } from './FeedbackTypeButton';

describe('<FeedbackTypeButton />', () => {
	it('should render FeedbackTypeButton', () => {
		render(
			<FeedbackTypeButton
				title="TitleBUG"
				srcImage="/bug.svg"
				altImage="Image of a bug."
			/>,
		);

		const feedbackTypeButton = screen.getByRole('button', { name: /TitleBUG/ });
		const imageButton = screen.getByRole('img', { name: 'Image of a bug.' });

		expect(feedbackTypeButton).toBeInTheDocument();
		expect(imageButton).toBeInTheDocument();
	});
});
