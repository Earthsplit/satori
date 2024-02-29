'use client'
import Link from 'next/link'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

import { cn } from '@/lib/utils'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useModifyCards from '@/hooks/useModifyCards'

const Nav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
	const { cardData, handleChange, updateCards } = useModifyCards()

	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			<Link
				href='/'
				className='text-sm font-medium transition-colors hover:text-primary'
			>
				Your deck
			</Link>
			<Link
				href='/'
				className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
			>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant='outline'>Add a card</Button>
					</DialogTrigger>
					<DialogContent className='sm:max-w-[425px]'>
						<DialogHeader>
							<DialogTitle>Add a new card</DialogTitle>
						</DialogHeader>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='name'
									className='text-right'
								>
									Japanese
								</Label>
								<Input
									id='name'
									name='japanese'
									className='col-span-3'
									placeholder='日本'
									value={cardData.content.japanese}
									onChange={handleChange}
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='username'
									className='text-right'
								>
									English
								</Label>
								<Input
									id='username'
									name='english'
									className='col-span-3'
									placeholder='Japan'
									value={cardData.content.english}
									onChange={handleChange}
								/>
							</div>
						</div>
						<DialogFooter>
							<DialogTrigger asChild>
								<Button
									type='submit'
									onClick={updateCards}
								>
									Add
								</Button>
							</DialogTrigger>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</Link>
		</nav>
	)
}
export default Nav
