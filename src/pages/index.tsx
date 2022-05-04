import Head from 'next/head';
import tw from 'twin.macro';
import styled from 'styled-components';
// import styles from '@/styles/';

import { ExampleComponent } from '@/components/ExampleComponent';
const StyledButton = styled.button`
	background: red;
	color: white;
	font-size: 1em;
	text-align: center;
	padding: 0.25em 1em;
	border: 2px solid black;
`;

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`;

const ConditionalButton = styled.button<{ isRed: boolean }>`
	${({ isRed }) =>
		isRed
			? tw`bg-red-500 hover:bg-red-700`
			: tw`bg-blue-500 hover:bg-blue-500`};
	${tw`
		text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
	`}
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>'TypeScript starter for Next.js'</title>
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<ExampleComponent title="Example" />
				<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
					<StyledButton>In Style</StyledButton>
					<br />
					<TailwindButton>In Tailwind Style</TailwindButton>
					<br />
					<ConditionalButton isRed={false}>
						Conditional Tailwind
					</ConditionalButton>
				</main>
			</main>
		</>
	);
}
