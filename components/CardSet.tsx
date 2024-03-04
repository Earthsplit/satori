import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { PrebuiltDecks } from '@/interfaces'
import Link from 'next/link'

export default function CardSet({ decks }: PrebuiltDecks) {
	return (
		<div className='grid gap-4'>
			{decks.map(deck => (
				<div key={deck.id}>
					<Card>
						<CardHeader>
							<CardTitle>{deck.set}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Number of words: {deck.cards.length}</p>
						</CardContent>
						<CardFooter>
							<Link href={`/prebuilt-decks/${deck.id}`}>
								<Button variant='secondary'>Learn</Button>
							</Link>
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	)
}
