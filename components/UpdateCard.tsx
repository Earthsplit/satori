'use client'

import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useModifyCards from '@/hooks/useModifyCards'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

export function UpdateCard({ query }: any) {
	const { cardData, handleChange, updateSingleCard } = useModifyCards()

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
							value={cardData.content.japanese}
							onChange={handleChange}
						/>
					</div>
					<div className=''>
						<Label htmlFor='username'>English</Label>
						<Input
							id='username'
							name='english'
							placeholder='Japan'
							value={cardData.content.english}
							onChange={handleChange}
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button
					type='submit'
					onClick={() => updateSingleCard(query)}
				>
					Edit
				</Button>
			</CardFooter>
		</Card>
	)
}
