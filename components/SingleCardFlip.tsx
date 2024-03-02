'use client'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Button } from './ui/button'
import './ui/styles.css'
import { CardActions } from './CardActions'

interface CardProps {
	card: {
		id: number
		content: {
			japanese: string
			english: string
		}
	}
}

const SingleCardFlip = ({ card }: CardProps) => {
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
				<CardFooter className='gap-2'>
					<Button
						variant='secondary'
						onClick={toggleFlip}
					>
						Flip
					</Button>
					{/* <Button
						variant='destructive'
						onClick={() => deleteCard(card)}
					>
						Delete
					</Button> */}
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
					{/* <Button
						variant='destructive'
						onClick={() => deleteCard(card)}
					>
						Delete
					</Button> */}
				</CardFooter>
			</Card>
		</div>
	)
}
export default SingleCardFlip
