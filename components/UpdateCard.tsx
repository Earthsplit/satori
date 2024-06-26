'use client'

import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useCards from '@/hooks/useCards'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useSearchParams } from 'next/navigation'

export function UpdateCard() {
	const { cardData, handleChange, updateSingleCard } = useCards()
	const searchParams = useSearchParams()
	const query = searchParams.get('id')
	console.log(query)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Edit a card</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					<div className=''>
						<Label
							htmlFor='name'
							className='text-right'
						>
							Japanese
						</Label>
						<Input
							id='name'
							name='japanese'
							placeholder='日本'
							value={cardData.japanese}
							onChange={handleChange}
						/>
					</div>
					<div className=''>
						<Label htmlFor='username'>English</Label>
						<Input
							id='username'
							name='english'
							placeholder='Japan'
							value={cardData.english}
							onChange={handleChange}
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button
					variant='secondary'
					type='submit'
					onClick={() => updateSingleCard(query)}
				>
					Edit
				</Button>
			</CardFooter>
		</Card>
	)
}
