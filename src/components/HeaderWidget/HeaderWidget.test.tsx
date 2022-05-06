import { render, screen } from '@/test-utils';
import { HeaderWidget } from './HeaderWidget';

describe('<HeaderWidget />', () => {
	it('should render HeaderWidget', () => {
		render(<HeaderWidget />);

		const headerWidget = screen.getByText('HeaderWidget');

		expect(headerWidget).toBeInTheDocument();
	});
});
