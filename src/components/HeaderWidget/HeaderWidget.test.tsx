import { render, screen } from '@/test-utils';
import { HeaderWidget } from './HeaderWidget';

describe('<HeaderWidget />', () => {
	it('should render HeaderWidget', () => {
		render(<HeaderWidget title="Test" />);

		const headerWidget = screen.getByText('Test');
		const closeButton = screen.getByRole('button');

		expect(headerWidget).toBeInTheDocument();
		expect(closeButton).toBeInTheDocument();
	});
});
