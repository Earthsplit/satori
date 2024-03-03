import { CardsProps } from '@/interfaces'
import SingleCard from './SingleCard'

const Cards = ({ cards }: CardsProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative'>
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
