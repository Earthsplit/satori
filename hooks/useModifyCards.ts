'use client'
import { Card } from '@/interfaces'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function useModifyCards() {
	const [cardData, setCardData] = useState({
		content: {
			japanese: '',
			english: '',
		},
	})
	const router = useRouter()

	async function updateCards() {
		try {
			const response = await fetch(`${process.env.URL}:4000/cards`, {
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

	async function updateSingleCard(query: string | null) {
		try {
			const response = await fetch(`${process.env.URL}:4000/cards/${query}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(cardData),
			})

			console.log(response.status)

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

	function redirectCardUpdate(card: Card) {
		router.push(`/edit-card?id=${card.id}`)
	}

	async function deleteCard(card: Card) {
		try {
			const response = await fetch(`${process.env.URL}:4000/cards/${card.id}`, {
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
		deleteCard,
		redirectCardUpdate,
		updateSingleCard,
	}
}
