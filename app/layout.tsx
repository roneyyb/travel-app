import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Home from '@/components/Home'


export const metadata: Metadata = {
	title: 'Travel',
	description: 'Travel UI/UX App For Camping',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body >
				<NavBar />
				<main
					className='relative overflow-hidden'
				> {<Home />}</main>
				<Footer />
			</body>

		</html>
	)
}
