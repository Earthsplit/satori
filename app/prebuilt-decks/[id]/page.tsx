import Cards from '@/components/Cards'
import { db } from '@/lib/db'

export default async function Page({ params }: { params: { id: string } }) {
	const prebuiltDecks = await db.card.findMany({
		where: {
			prebuiltDeckId: params.id,
		},
	})

	if (!prebuiltDecks) {
		return <p>Failed to fetch cards</p>
	}

	return (
		<Cards
			flip={false}
			cards={prebuiltDecks}
		/>
	)
}
