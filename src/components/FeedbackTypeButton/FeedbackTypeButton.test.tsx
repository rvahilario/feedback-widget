import { render, screen } from '@/test-utils';
import { FeedbackTypeButton } from './FeedbackTypeButton';

describe('<FeedbackTypeButton />', () => {
	it('should render FeedbackTypeButton', () => {
		render(<FeedbackTypeButton />);

		const feedbackTypeButton = screen.getByText('FeedbackTypeButton');

		expect(feedbackTypeButton).toBeInTheDocument();
	});
});
