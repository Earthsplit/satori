import { AddCard } from '@/components/AddCard'
import CardsFlip from '@/components/CardsFlip'
import getCards from '@/lib/getCards'

export default async function Home() {
	const cards = await getCards('cards')

	return (
		<main className='grid'>
			<AddCard />
			<CardsFlip cards={cards} />
		</main>
	)
}
