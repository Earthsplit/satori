import { AddCard } from '@/components/AddCard'
import Cards from '@/components/Cards'
import { db } from '@/lib/db'

export default async function Home() {
	const allCards = await db.card.findMany()

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
