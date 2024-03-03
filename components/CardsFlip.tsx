import { CardsProps } from '@/interfaces'
import SingleCardFlip from './SingleCardFlip'

const CardsFlip = ({ cards }: CardsProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative'>
			{cards.map(card => (
				<SingleCardFlip
					card={card}
					key={card.id}
				/>
			))}
		</div>
	)
}

export default CardsFlip
