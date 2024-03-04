import { AddCard } from '@/components/AddCard'
import Cards from '@/components/Cards'
import getCards from '@/lib/getCards'

export default async function Home() {
	const cards = await getCards('cards')

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
