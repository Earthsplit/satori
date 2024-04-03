'use client'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useModifyCards from '@/hooks/useModifyCards'

export function AddCard() {
	const { cardData, handleChange, updateCards } = useModifyCards()

	return (
		<Dialog>
			<DialogTrigger
				asChild
				className='mb-4'
			>
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
							value={cardData.japanese}
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
							value={cardData.english}
							onChange={handleChange}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogTrigger asChild>
						<Button
							variant='secondary'
							type='submit'
							onClick={updateCards}
						>
							Add
						</Button>
					</DialogTrigger>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
