import { render, screen } from '@/test-utils';
import { FooterWidget } from './FooterWidget';

describe('<FooterWidget />', () => {
	it('should render FooterWidget', () => {
		render(<FooterWidget />);

		const footerWidget = screen.getByText('Made with ♥ by');
		const linkFooter = screen.getByRole('link', { name: 'Renan Hilário' });

		expect(footerWidget).toBeInTheDocument();
		expect(linkFooter).toBeInTheDocument();
	});
});
