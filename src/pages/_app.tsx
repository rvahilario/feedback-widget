import { AppProps } from 'next/app';
import Theme from '@/styles/theme';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</Theme>
	);
}
