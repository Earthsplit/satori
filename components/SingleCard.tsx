import { CardProps } from '@/interfaces'
import { CardHeader, CardTitle, CardContent, Card } from './ui/card'

export default function SingleCard({ card }: CardProps) {
	return (
		<Card>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>{card.japanese}</CardTitle>
			</CardHeader>
			<CardContent>{card.english}</CardContent>
		</Card>
	)
}
