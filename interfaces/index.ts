import { PrebuiltDeck, Card } from '@prisma/client'

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

export interface PrebuiltDeckProps {
	deck: PrebuiltDeck
}

export interface CardProps {
	card: Card
}
