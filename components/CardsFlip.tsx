import SingleCardFlip from './SingleCardFlip'

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

const CardsFlip = ({ cards }: CardsProps) => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative'>
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
