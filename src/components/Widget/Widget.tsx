import { PopoverContainer, FeedbackButton } from './styles';
import { WidgetProps } from './types';
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from '../WidgetForm';

export const Widget = ({}: WidgetProps) => {
	return (
		<PopoverContainer>
			<Popover.Panel>
				<WidgetForm />
			</Popover.Panel>

			<Popover.Button>
				<FeedbackButton className="group">
					<ChatTeardropDots weight="thin" className="w-6 h-6" />
					<span className="group-hover:max-w-xs">Feedback</span>
				</FeedbackButton>
			</Popover.Button>
		</PopoverContainer>
	);
};
