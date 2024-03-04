'use client'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Button } from './ui/button'
import './ui/styles.css'
import { CardActions } from './CardActions'
import { CardProps } from '@/interfaces'

export default function SingleCardFlip({ card }: CardProps) {
	const [flip, setFlip] = useState<boolean>(false)

	const toggleFlip = () => setFlip(!flip)

	return (
		<div className={`card ${flip ? 'flip' : ''}`}>
			<Card className='front'>
				<CardHeader className='flex flex-row items-center justify-between'>
					<CardTitle>{card.content.japanese}</CardTitle>
					<CardActions
						card={card}
						showDeleteButton={true}
					/>
				</CardHeader>
				<CardFooter>
					<Button
						variant='secondary'
						onClick={toggleFlip}
					>
						Flip
					</Button>
				</CardFooter>
			</Card>
			<Card className='back'>
				<CardHeader className='flex flex-row items-center justify-between'>
					<CardTitle>{card.content.english}</CardTitle>
					<CardActions
						card={card}
						showDeleteButton={true}
					/>
				</CardHeader>
				<CardFooter>
					<Button
						variant='secondary'
						onClick={toggleFlip}
					>
						Flip
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
