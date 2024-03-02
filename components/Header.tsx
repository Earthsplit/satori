import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
	return (
		<header className='flex items-center justify-between mb-8'>
			<Link
				href='/'
				className='font-bold tracking-tight text-4xl'
			>
				Satori 🇯🇵
			</Link>
			<Nav />
		</header>
	)
}

export default Header
