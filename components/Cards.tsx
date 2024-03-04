import { CardsProps } from '@/interfaces'
import SingleCard from './SingleCard'
import SingleCardFlip from './SingleCardFlip'

export default function Cards({ cards, flip }: CardsProps) {
	const Card = flip ? SingleCardFlip : SingleCard

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative'>
			{cards.map(card => (
				<Card
					card={card}
					key={card.id}
				/>
			))}
		</div>
	)
}
