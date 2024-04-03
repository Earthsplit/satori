'use client'
import { Card } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function useCards() {
	const [cardData, setCardData] = useState({
		japanese: '',
		english: '',
	})
	const router = useRouter()

	async function updateCards() {
		try {
			const response = await fetch(`/api/cards`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(cardData),
			})

			router.refresh()

			if (!response.ok) throw new Error('Error')

			setCardData({
				japanese: '',
				english: '',
			})
		} catch (error) {
			console.error('Error updating cards:', error)
		}
	}

	async function updateSingleCard(query: string | null) {
		try {
			const response = await fetch(`/api/cards/${query}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(cardData),
			})

			router.refresh()

			if (!response.ok) throw new Error('Error')

			setCardData({
				japanese: '',
				english: '',
			})
		} catch (error) {
			console.error('Error updating cards:', error)
		}
	}

	async function deleteCard(card: Card) {
		try {
			const response = await fetch(`api/cards/${card.id}`, {
				method: 'DELETE',
			})

			router.refresh()

			if (!response.ok) throw new Error('Error')
		} catch (error) {
			console.error('Error updating cards:', error)
		}
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target
		setCardData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return {
		cardData,
		handleChange,
		updateCards,
		deleteCard,
		updateSingleCard,
	}
}
