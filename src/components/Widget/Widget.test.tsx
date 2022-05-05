import { render, screen } from '@/test-utils';
import { Widget } from './Widget';

describe('<Widget />', () => {
	it('should render Widget', () => {
		render(<Widget />);

		const widget = screen.getByText('Widget');

		expect(widget).toBeInTheDocument();
	});
});
