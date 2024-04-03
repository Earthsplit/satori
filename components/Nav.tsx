import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ToggleTheme } from './ToggleTheme'

export default function Nav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn('md:space-x-4 lg:space-x-6', className)}
			{...props}
		>
			<div className='flex gap-4'>
				<Link
					href='/'
					className='font-medium transition-colors hover:text-primary'
				>
					Your deck
				</Link>
				<Link
					className='font-medium transition-colors hover:text-primary'
					href='/prebuilt-decks'
				>
					Prebuilt decks
				</Link>
			</div>
			<div className='flex'>
				<ToggleTheme />
			</div>
		</nav>
	)
}
