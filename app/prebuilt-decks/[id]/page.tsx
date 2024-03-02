import Cards from '@/components/Cards'
import getCards from '@/lib/getCards'

export default async function Page() {
	const cards = await getCards()
	return (
		<div>
			<Cards cards={cards} />
		</div>
	)
}
