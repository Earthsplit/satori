import { CardActions } from './CardActions'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

interface CardProps {
	card: {
		id: number
		content: {
			japanese: string
			english: string
		}
	}
}

const SingleCard = ({ card }: CardProps) => {
	return (
		<Card>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>{card.content.japanese}</CardTitle>
				<CardActions showDeleteButton={false}/>
			</CardHeader>
			<CardContent>{card.content.english}</CardContent>
		</Card>
	)
}
export default SingleCard
