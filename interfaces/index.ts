export interface Card {
	id: number
	content: {
		japanese: string
		english: string
	}
}

export interface CardsProps {
	cards: Card[]
}

export interface CardProps {
	card: Card
}

export interface CardActionsProps {
	card?: Card
	showDeleteButton: boolean
}
