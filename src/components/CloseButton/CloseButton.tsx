import { CloseButtonProps } from './types';
import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';
import { Container } from './styles';

export const CloseButton = ({ weight }: CloseButtonProps) => {
	return (
		<Container>
			<Popover.Button className="border-2 border-transparent focus:border-brand focus:outline-none rounded">
				<X weight={weight} className="w-4 h-4" />
			</Popover.Button>
		</Container>
	);
};
