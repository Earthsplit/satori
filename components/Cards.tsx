import { FC } from 'react'
import SingleCard from './SingleCard'

interface Card {
	id: number
	content: {
		japanese: string
		english: string
	}
}

interface CardsProps {
	cards: Card[]
}

const Cards: FC<CardsProps> = ({ cards }) => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative'>
			{cards.map(card => (
				<SingleCard
					card={card}
					key={card.id}
				/>
			))}
		</div>
	)
}

export default Cards
