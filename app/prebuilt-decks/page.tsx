import CardSet from '@/components/CardSet'
import { db } from '@/lib/db'

export default async function PrebuiltDecks() {
	const prebuiltDecks = await db.prebuiltDeck.findMany()

	if (!prebuiltDecks) {
		return <p>Failed to fetch decks</p>
	}

	return (
		<main className='grid gap-4'>
			<h2 className='font-bold tracking-tight text-2xl'>Decks:</h2>
			<div className='grid gap-4'>
				{prebuiltDecks.map(deck => (
					<div key={deck.id}>
						<CardSet deck={deck} />
					</div>
				))}
			</div>
		</main>
	)
}
