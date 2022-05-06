import { render, screen } from '@/test-utils';
import { Widget } from './Widget';

describe('<Widget />', () => {
	it('should render Widget', () => {
		render(<Widget />);

		const widgetButton = screen.getByText('Feedback');

		expect(widgetButton).toBeInTheDocument();
	});
});
