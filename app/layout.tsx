import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'satori',
	description: 'Japanese is cool!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<div
						className={`${inter.className} max-w-[70rem] m-auto p-8 sm:p-12 md:p-16`}
					>
						<Header />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
