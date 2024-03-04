import CardSet from '@/components/CardSet'
import getCards from '@/lib/getCards'

export default async function PrebuiltDecks() {
	const prebuiltDecks = await getCards('prebuilt_decks')

	return (
		<main className='grid gap-4'>
			<h2 className='font-bold tracking-tight text-2xl'>Decks:</h2>
			<CardSet decks={prebuiltDecks} />
		</main>
	)
}
