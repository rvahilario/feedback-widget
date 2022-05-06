import { render, screen } from '@/test-utils';
import { CloseButton } from './CloseButton';

describe('<CloseButton />', () => {
	it('should render CloseButton', () => {
		render(<CloseButton />);

		const closeButton = screen.getByText('CloseButton');

		expect(closeButton).toBeInTheDocument();
	});
});
