import Cards from '@/components/Cards'
import Nav from '@/components/Nav'
import getCards from '@/lib/getCards'

export default async function Home() {
	const cards = await getCards()

	return (
		<main className='grid p-16'>
			<header className='flex items-center justify-between mb-8'>
				<h1 className='font-bold tracking-tight text-4xl'>Satori 🇯🇵</h1>
				<Nav />
			</header>
			<Cards cards={cards} />
			<div>
				TODO:
				<ul>
					<li>put all fetch requests into one custom hook ✅</li>
					<li>improve ui</li>
					<li>filter?</li>
				</ul>
			</div>
		</main>
	)
}
