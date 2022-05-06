import { render, screen } from '@/test-utils';
import { CloseButton } from './CloseButton';

describe('<CloseButton />', () => {
	it('should render CloseButton', () => {
		render(<CloseButton weight="bold" />);

		const closeButton = screen.getByRole('button');

		expect(closeButton).toBeInTheDocument();
	});
});
