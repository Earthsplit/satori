export interface Card {
	id: number
	content: {
		japanese: string
		english: string
	}
}

export interface CardsProps {
	cards: Card[]
	flip: boolean
}

export interface CardProps {
	card: Card
}

export interface CardActionsProps {
	card: Card
}

export interface PrebuiltDeck {
	id: number
	set: string
	cards: Card[]
}

export interface PrebuiltDecks {
	decks: PrebuiltDeck[]
}
