import { Container } from './styles';
import { FooterWidgetProps } from './types';

export const FooterWidget = ({}: FooterWidgetProps) => {
	return (
		<Container>
			{'Made with ♥ by '}
			<a
				href="https://www.linkedin.com/in/renan-hilario/"
				target="_blank"
				className="underline-offset-2"
				rel="noreferrer"
			>
				Renan Hilário
			</a>
		</Container>
	);
};
