import Cards from '@/components/Cards'
import { PrebuiltDeck } from '@/interfaces'
import getCards from '@/lib/getCards'

export default async function Page({ params }: { params: { id: number } }) {
	const prebuiltDecks: PrebuiltDeck[] = await getCards('prebuilt_decks')
	const selectedDeck = prebuiltDecks.find(deck => deck.id === params.id)

	if (!prebuiltDecks) {
		return <p>Failed to fetch cards</p>
	}

	if (!selectedDeck) {
		return <p>Deck with set name {params.id} not found</p>
	}

	return (
		<Cards
			flip={false}
			cards={selectedDeck.cards}
		/>
	)
}
