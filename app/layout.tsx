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

				{/* Overflow property
				visible - This is the default value. It will extend beyond the container's boundaries if height and width is given.
				hidden - If content extending beyond the container's boundaries will not be visible.
				scroll -  Scrollbars (both horizontal and vertical) will be added to the container, allowing users to scroll and view the content that overflows the container.
				auto: Scrollbars will only be displayed if the content exceeds the container's dimensions. If there's no overflow, no scrollbars will appear. */}
				<main
					className='relative overflow-hidden'
				>
					{<Home />}
				</main>
				<Footer />
			</body>

		</html>
	)
}
