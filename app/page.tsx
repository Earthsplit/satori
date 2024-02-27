import Cards from '@/components/Cards'
import Nav from '@/components/Nav'
import { revalidatePath } from 'next/cache'

interface Card {
	id: number
	content: {
		japanese: string
		english: string
	}
}

async function getCards(): Promise<Card[]> {
	const result = await fetch('http://localhost:4000/cards', {
		cache: 'no-cache',
	})

	return result.json()
}

export default async function Home() {
	const cards = await getCards()

	return (
		<main className='grid p-16'>
			<header className='flex items-center justify-between mb-8'>
				<h1 className='font-bold tracking-tight text-4xl'>Satori 🇯🇵</h1>
				<Nav />
			</header>
			<Cards cards={cards} />
		</main>
	)
}
