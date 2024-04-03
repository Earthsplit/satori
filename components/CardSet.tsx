import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { PrebuiltDeckProps } from '@/interfaces'
import Link from 'next/link'

export default function CardSet({ deck }: PrebuiltDeckProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{deck.name}</CardTitle>
			</CardHeader>
			<CardFooter>
				<Link href={`/prebuilt-decks/${deck.id}`}>
					<Button variant='secondary'>Learn</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
