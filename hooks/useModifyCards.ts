'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Card {
	id: number
	content: {
		japanese: string
		english: string
	}
}

const useModifyCards = () => {
	const [cardData, setCardData] = useState({
		content: {
			japanese: '',
			english: '',
		},
	})
	const router = useRouter()

	const updateCards = async () => {
		try {
			const response = await fetch('http://localhost:4000/cards', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(cardData),
			})

			router.refresh()
			if (!response.ok) throw new Error('Error')

			setCardData({
				content: {
					japanese: '',
					english: '',
				},
			})
		} catch (error) {
			console.error('Error updating cards:', error)
		}
	}

	const deleteCard = async (card: Card) => {
		try {
			const response = await fetch(`http://localhost:4000/cards/${card.id}`, {
				method: 'DELETE',
			})

			router.refresh()

			if (!response.ok) throw new Error('Error')
		} catch (error) {
			console.error('Error updating cards:', error)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setCardData(prev => ({
			...prev,
			content: {
				...prev.content,
				[name]: value,
			},
		}))
	}

	return {
		cardData,
		handleChange,
		updateCards,
		deleteCard
	}
}

export default useModifyCards
