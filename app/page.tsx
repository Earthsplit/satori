import { AddCard } from '@/components/AddCard'
import CardsFlip from '@/components/CardsFlip'
import getCards from '@/lib/getCards'
import Link from 'next/link'

export default async function Home() {
	const cards = await getCards()

	return (
		<main className='grid'>
			<AddCard />
			<CardsFlip cards={cards} />
			<Link href='/prebuilt-decks'>Prebuilt decks</Link>
			<div>
				TODO:
				<ul>
					<li>Clean up the code</li>
				</ul>
			</div>
		</main>
	)
}
