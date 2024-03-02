import Header from '@/components/Header'
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
			<h2 className='font-bold tracking-tight text-2xl'>Decks:</h2>
			<Card className=''>
				<CardHeader>
					<CardTitle>Set 1</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Number of words: 20</p>
				</CardContent>
				<CardFooter className='gap-2'>
					<Link href='/prebuilt-decks/1'>
						<Button variant='secondary'>Learn</Button>
					</Link>
				</CardFooter>
			</Card>
		</main>
	)
}

export default PrebuiltDecks
