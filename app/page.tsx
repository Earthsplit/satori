import { AddCard } from '@/components/AddCard'
import Cards from '@/components/Cards'

async function getCards() {
	let url = process.env.URL_DEV

	if (process.env.NODE_ENV == 'production') {
		url = process.env.URL_PROD
	}

	const response = await fetch(`${url}/api/cards`, {
		cache: 'no-store',
	})
	const data = await response.json()

	return data
}

export default async function Home() {
	const allCards = await getCards()

	if (!allCards) {
		return <p>Failed to fetch cards</p>
	}

	return (
		<main className='grid'>
			<AddCard />
			<Cards
				flip={true}
				cards={allCards}
			/>
		</main>
	)
}
