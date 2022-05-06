import { CloseButton } from '../CloseButton';
import { Container } from './styles';
import { HeaderWidgetProps } from './types';

export const HeaderWidget = ({ title }: HeaderWidgetProps) => {
	return (
		<Container>
			<span>{title}</span>
			<CloseButton weight="bold" />
		</Container>
	);
};
