import { Container } from './styles';
import { FooterWidget } from '../FooterWidget';
import { HeaderWidget } from '../HeaderWidget';
import { WidgetFormProps } from './types';

export const WidgetForm = ({}: WidgetFormProps) => {
	return (
		<Container className="w-[calc(100vw-2rem)]">
			<HeaderWidget title="Send your feedback" />

			<FooterWidget />
		</Container>
	);
};
