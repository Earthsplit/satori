import { AddCard } from '@/components/AddCard'
import Cards from '@/components/Cards'
import getCards from '@/lib/getCards'
import Error from 'next/error'

export default async function Home() {
	const cards = await getCards('cards')

	if (!cards) {
		return <p>Failed to fetch cards</p>
	}

	return (
		<main className='grid'>
			<AddCard />
			<Cards
				flip={true}
				cards={cards}
			/>
		</main>
	)
}
