import { Container, FeedbackButton } from './styles';
import { WidgetProps } from './types';
import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export const Widget = ({}: WidgetProps) => {
	const [isWidgetOpen, setIsWidgetOpen] = useState(false);
	const handleToggleWidgetVisibility = (): void =>
		setIsWidgetOpen(!isWidgetOpen);

	return (
		<Container>
			{isWidgetOpen && <div>Testing handleToggleWidgetVisibility</div>}
			<FeedbackButton className="group" onClick={handleToggleWidgetVisibility}>
				<ChatTeardropDots weight="thin" className="w-6 h-6" />
				<span className="group-hover:max-w-xs">Feedback</span>
			</FeedbackButton>
		</Container>
	);
};
