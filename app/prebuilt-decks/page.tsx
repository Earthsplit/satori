import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

const PrebuiltDecks = () => {
	return (
		<main className=''>
			<div className='grid gap-4'>
				<h2 className='font-bold tracking-tight text-2xl'>Decks:</h2>
				<Card className=''>
					<CardHeader>
						<CardTitle>Set 1</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Number of words: 20</p>
					</CardContent>
					<CardFooter>
						<Link href='/prebuilt-decks/1'>
							<Button variant='secondary'>Learn</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
		</main>
	)
}

export default PrebuiltDecks
