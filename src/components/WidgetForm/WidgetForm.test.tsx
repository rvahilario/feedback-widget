import { render, screen } from '@/test-utils';
import { WidgetForm } from './WidgetForm';

describe('<WidgetForm />', () => {
	it('should render WidgetForm', () => {
		render(<WidgetForm />);

		const widgetForm = screen.getByText('Send your feedback');

		expect(widgetForm).toBeInTheDocument();
	});
});
