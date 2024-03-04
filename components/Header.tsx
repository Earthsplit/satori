import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
	return (
		<header className='flex items-center justify-between mb-8'>
			<Link
				href='/'
				className='font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl'
			>
				Satori 🇯🇵
			</Link>
			<Nav />
		</header>
	)
}
