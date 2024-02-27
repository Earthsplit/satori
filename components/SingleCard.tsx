'use client'
import { FC, useState } from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Button } from './ui/button'
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

const SingleCard: FC<CardProps> = ({ card }) => {
	const [flip, setFlip] = useState<boolean>(false)

	const toggleFlip = () => setFlip(!flip)

	return (
		<div className={`card ${flip ? 'flip' : ''}`}>
			<Card className='front'>
				<CardHeader>
					<CardTitle>{card.content.japanese}</CardTitle>
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
				<CardHeader>
					<CardTitle>{card.content.english}</CardTitle>
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
export default SingleCard
