import { render, screen } from '@/test-utils';
import { FooterWidget } from './FooterWidget';

describe('<FooterWidget />', () => {
	it('should render FooterWidget', () => {
		render(<FooterWidget />);

		const footerWidget = screen.getByText('FooterWidget');

		expect(footerWidget).toBeInTheDocument();
	});
});
