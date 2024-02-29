'use client'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Button } from './ui/button'
import useModifyCards from '@/hooks/useModifyCards'
import './ui/styles.css'

interface CardProps {
	card: {
		id: number
		content: {
			japanese: string
			english: string
		}
	}
}

const SingleCard = ({ card }: CardProps) => {
	const [flip, setFlip] = useState<boolean>(false)
	const { deleteCard } = useModifyCards()

	const toggleFlip = () => setFlip(!flip)

	return (
		<div className={`card ${flip ? 'flip' : ''}`}>
			<Card className='front'>
				<CardHeader>
					<CardTitle>{card.content.japanese}</CardTitle>
				</CardHeader>
				<CardFooter className='gap-2'>
					<Button
						variant='secondary'
						onClick={toggleFlip}
					>
						Flip
					</Button>
					<Button
						variant='destructive'
						onClick={() => deleteCard(card)}
					>
						Delete
					</Button>
				</CardFooter>
			</Card>
			<Card className='back'>
				<CardHeader>
					<CardTitle>{card.content.english}</CardTitle>
				</CardHeader>
				<CardFooter className='gap-2'>
					<Button
						variant='secondary'
						onClick={toggleFlip}
					>
						Flip
					</Button>
					<Button
						variant='destructive'
						onClick={() => deleteCard(card)}
					>
						Delete
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
export default SingleCard
